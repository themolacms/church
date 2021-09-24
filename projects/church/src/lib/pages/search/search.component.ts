import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest, of } from 'rxjs';
import { take, tap, filter, map, switchMap } from 'rxjs/operators';
import { Post, Video, Tag } from '@lamnhan/schemata';
import {
  TagDataService,
  PostDataService,
  PostSearchAction,
  PostSearchMoreAction,
  PostStateSearchListItem,
  VideoDataService,
  VideoSearchAction,
  VideoSearchMoreAction,
  VideoStateSearchListItem,
} from '@lamnhan/ngx-schemata';
import {
  HelperService,
  SettingService,
  UserService,
  DatabaseDataSearchResult,
  DatabaseDataSearchingIndexData
} from '@lamnhan/ngx-useful';

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
    tap(([queryParams]) => {
      // set up article search context
      this.articleSearchContext = this.postDataService.createSearchIndex(item =>
        !!item &&
          item.type === 'article' &&
          item.status === 'publish' &&
          item.locale === this.settingService.locale
      );
      // run a new search
      if (queryParams.q) {
        // do searching
        this.selectQuery(queryParams.q);
        // TODO: remove query from url
      } else {
        // check if there are post result
        this.store
          .select(state => state.schemata_post.searchList?.[this.postSearchId] as PostStateSearchListItem)
          .pipe(
            filter(data => !!data),
            take(1),
          )
          .subscribe(data => this.handlePostSearch(data));
        // check if there are article result
        this.store
          .select(state => state.schemata_post.searchList?.[this.articleSearchId] as PostStateSearchListItem)
          .pipe(
            filter(data => !!data),
            take(1),
          )
          .subscribe(data => this.handleArticleSearch(data));
        // check if there are video result
        this.store
          .select(state => state.schemata_video.searchList?.[this.videoSearchId] as VideoStateSearchListItem)
          .pipe(
            filter(data => !!data),
            take(1),
          )
          .subscribe(data => this.handleVideoSearch(data));
      }
    }),
  );

  private readonly viewSize = 12;
  topQueries: Tag[] = [];
  query = '';

  private readonly postSearchId = 'post';
  isPostLoading = false;
  isPostLoadingMore = false;
  postResult?: DatabaseDataSearchResult<Post>;
  posts: Post[] = [];
  postCount = 0;
  postTotalPages = 0;
  postPage = 1;

  private readonly articleSearchId = 'article';
  isArticleLoading = false;
  isArticleLoadingMore = false;
  articleResult?: DatabaseDataSearchResult<Post>;
  articles: Post[] = [];
  articleCount = 0;
  articleTotalPages = 0;
  articlePage = 1;
  articleSearchContext!: DatabaseDataSearchingIndexData;

  private readonly videoSearchId = 'video';
  isVideoLoading = false;
  isVideoLoadingMore = false;
  videoResult?: DatabaseDataSearchResult<Video>;
  videos: Video[] = [];
  videoCount = 0;
  videoTotalPages = 0;
  videoPage = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private helperService: HelperService,
    private settingService: SettingService,
    private userService: UserService,
    private tagDataService: TagDataService,
    private postDataService: PostDataService,
    private videoDataService: VideoDataService,
  ) {}

  ngOnInit(): void {
    this.loadTopQueries();
  }

  selectQuery(query: string) {
    this.query = query;
    this.search();
  }

  search() {
    if (!this.query) return;
    // fetch posts
    this.isPostLoading = true;
    this.store.dispatch(new PostSearchAction(this.postSearchId, this.query, this.viewSize))
      .pipe(
        take(1),
        map(state => state.schemata_post.searchList?.[this.postSearchId] as PostStateSearchListItem),
      )
      .subscribe(data => this.handlePostSearch(data));
    // fetch articles
    this.isArticleLoading = true;
    this.store.dispatch(
        new PostSearchAction(this.articleSearchId, this.query, this.viewSize, this.articleSearchContext)
      )
      .pipe(
        take(1),
        map(state => state.schemata_post.searchList?.[this.articleSearchId] as PostStateSearchListItem),
      )
      .subscribe(data => this.handleArticleSearch(data));
    // fetch videos
    this.isVideoLoading = true;
    this.store.dispatch(new VideoSearchAction(this.videoSearchId, this.query, this.viewSize))
      .pipe(
        take(1),
        map(state => state.schemata_video.searchList?.[this.videoSearchId] as VideoStateSearchListItem),
      )
      .subscribe(data => this.handleVideoSearch(data));
    // save query
    this.saveQuery(this.query);
  }

  loadMorePosts() {
    if (!this.postResult) return;
    this.isPostLoadingMore = true;
    this.store.dispatch(new PostSearchMoreAction(this.postSearchId, ++this.postPage))
    .pipe(
      take(1),
      map(state => state.schemata_post.searchList?.[this.postSearchId] as PostStateSearchListItem),
    )
    .subscribe(item => {
      this.posts = item.items;
      this.isPostLoadingMore = false;
    });
  }

  loadMoreArticles() {
    if (!this.postResult) return;
    this.isArticleLoadingMore = true;
    this.store.dispatch(new PostSearchMoreAction(this.articleSearchId, ++this.articlePage))
    .pipe(
      take(1),
      map(state => state.schemata_post.searchList?.[this.articleSearchId] as PostStateSearchListItem),
    )
    .subscribe(item => {
      this.articles = item.items;
      this.isArticleLoadingMore = false;
    });
  }

  loadMoreVideos() {
    if (!this.videoResult) return;
    this.isVideoLoadingMore = true;
    this.store.dispatch(new VideoSearchMoreAction(this.videoSearchId, ++this.videoPage))
    .pipe(
      take(1),
      map(state => state.schemata_video.searchList?.[this.videoSearchId] as VideoStateSearchListItem),
    )
    .subscribe(item => {
      this.videos = item.items;
      this.isVideoLoadingMore = false;
    });
  }

  private handlePostSearch(data: PostStateSearchListItem) {
    this.postResult = data.result;
    this.posts = data.items;
    this.postCount = this.postResult.count();
    this.postTotalPages = Math.ceil(this.postCount / this.viewSize);
    // misc
    if (!this.query) {
      this.query = data.query;
    }
    this.isPostLoading = false;
  }

  private handleArticleSearch(data: PostStateSearchListItem) {
    this.articleResult = data.result;
    this.articles = data.items;
    this.articleCount = this.articleResult.count();
    this.articleTotalPages = Math.ceil(this.articleCount / this.viewSize);
    // misc
    if (!this.query) {
      this.query = data.query;
    }
    this.isArticleLoading = false;
  }

  private handleVideoSearch(data: VideoStateSearchListItem) {
    this.videoResult = data.result;
    this.videos = data.items;
    this.videoCount = this.videoResult.count();
    this.videoTotalPages = Math.ceil(this.videoCount / this.viewSize);
    // misc
    if (!this.query) {
      this.query = data.query;
    }
    this.isVideoLoading = false;
  }

  private loadTopQueries() {
    this.tagDataService.list(
      ref => ref
        .where('status', '==', 'publish')
        .where('type', '==', 'search')
        .orderBy('createdAt', 'desc')
        .limit(30),
      { name: 'tag:search:publish:latest-top-queries' }
    )
    .pipe(
      map(tags => tags.sort((a, b) => (a.count || 0) > (b.count || 0) ? -1 : 1)),
    )
    .subscribe(tags => this.topQueries = tags.slice(0, 5));
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
      status: 'draft',
      createdAt,
      updatedAt: createdAt,
      count: 1,
    };
    this.tagDataService.get(id).pipe(
      switchMap(item =>
        !item
          ? this.tagDataService.create(id, newTag)
          : item.type === 'search'
            ? this.tagDataService.increment(id, { count: 1 })
            : of(false)
      )
    )
    .subscribe();
  }

}
