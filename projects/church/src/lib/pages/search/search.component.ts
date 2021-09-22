import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Post, Video, Tag } from '@lamnhan/schemata';
import { TagDataService, PostDataService, VideoDataService } from '@lamnhan/ngx-schemata';
import { HelperService, UserService, DatabaseDataSearchResult } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public readonly page$ = combineLatest([
    this.route.queryParams,
    this.tagDataService.setupSearching(true),
    this.postDataService.setupSearching(),
    this.videoDataService.setupSearching(),
  ])
  .pipe(
    tap(([queryParams]) => (this.query = queryParams.q || '')),
  );

  private readonly viewSize = 12;
  topQueries: Tag[] = [];
  query = '';

  postResult?: DatabaseDataSearchResult<Post>;
  posts: Post[] = [];
  postCount = 0;
  postPage = 1;
  postTotalPages = 0;
  
  videoResult?: DatabaseDataSearchResult<Video>;
  videos: Video[] = [];
  videoCount = 0;
  videoPage = 1;
  videoTotalPages = 0;

  constructor(
    private route: ActivatedRoute,
    private helperService: HelperService,
    private userService: UserService,
    private tagDataService: TagDataService,
    private postDataService: PostDataService,
    private videoDataService: VideoDataService,
  ) {}

  ngOnInit(): void {
    this.tagDataService.list(
      ref => ref
        .where('status', '==', 'publish')
        .where('type', '==', 'default') // TODO: replace with 'search'
        .orderBy('count', 'desc')
        .limit(5),
      { name: 'tag:default:publish:top-5' }
    )
    .subscribe(tags => this.topQueries = tags);
  }

  search() {
    if (!this.query) return;
    // fetch posts
    this.postResult = this.postDataService.search(this.query, this.viewSize);
    if (this.postResult) {
      this.postResult.list().subscribe(posts => this.posts = posts);
      this.postCount = this.postResult.count();
      this.postTotalPages = Math.ceil(this.postCount / this.viewSize);
    }
    // fetch videos
    this.videoResult = this.videoDataService.search(this.query, this.viewSize);
    if (this.videoResult) {
      this.videoResult.list().subscribe(videos => this.videos = videos);
      this.videoCount = this.videoResult.count();
      this.videoTotalPages = Math.ceil(this.videoCount / this.viewSize);
    }
    // save query
    this.saveQuery(this.query);
  }

  loadMorePosts() {
    if (!this.postResult)  return;
    this.postResult.list(++this.postPage).subscribe(posts => this.posts = this.posts.concat(posts));
  }

  loadMoreVideos() {
    if (!this.videoResult)  return;
    this.videoResult.list(++this.videoPage).subscribe(videos => this.videos = this.videos.concat(videos));
  }

  private saveQuery(query: string) {
    const uid = (this.userService.uid || '');
    const title = query;
    const id = this.helperService.slugify(title);
    const createdAt = new Date().toISOString();
    const newTag: Tag = {
      uid,
      title,
      id,
      type: 'search',
      status: 'publish',
      createdAt,
      updatedAt: createdAt,
      count: 1,
    };
    this.tagDataService.exists(id).pipe(
      switchMap(isExists =>
        isExists
          ? this.tagDataService.increment(id, { count: 1 })
          : this.tagDataService.create(id, newTag)
      )
    )
    .subscribe();
  }

}
