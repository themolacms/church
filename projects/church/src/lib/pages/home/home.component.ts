import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, tap, take } from 'rxjs/operators';
import { Post, Video } from '@lamnhan/schemata';
import { PostQueryAction, VideoQueryAction } from '@lamnhan/ngx-schemata';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
  
  public page$ = this.settingService.onLocaleChanged.pipe(
    tap(locale =>
      (this.locale = locale) &&
      this.fetchPosts() &&
      this.fetchArticles() &&
      this.fetchVideos()
    ),
  );

  private locale!: string;
  
  posts: Post[] = [];
  isLoadingPosts = false;

  articles: Post[] = [];
  isLoadingArticles = false;

  videos: Video[] = [];
  isLoadingVideos = false;

  constructor(
    private store: Store,
    private metaService: MetaService,
    private settingService: SettingService
  ) {}

  ngOnInit() {}

  private fetchPosts() {
    // show loading
    this.isLoadingPosts = true;
    // fetch data
    const queryId = `post:default:publish:${this.locale}:1`;
    return this.store.dispatch(
      new PostQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'default')
          .where('status', '==', 'publish')
          .where('locale', '==', this.locale)
          .orderBy('createdAt', 'desc')
          .limit(12)
        ,
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_post)
    )
    .subscribe(postState => {
      // save posts
      this.posts = postState.queryList[queryId];
      // reset loading
      this.isLoadingPosts = false;
    });
  }

  private fetchArticles() {
    // show loading
    this.isLoadingArticles = true;
    // fetch data
    const queryId = `post:article:publish:${this.locale}:1`;
    return this.store.dispatch(
      new PostQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'article')
          .where('status', '==', 'publish')
          .where('locale', '==', this.locale)
          .orderBy('createdAt', 'desc')
          .limit(12)
        ,
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_post)
    )
    .subscribe(postState => {
      // save articles
      this.articles = postState.queryList[queryId];
      // reset loading
      this.isLoadingArticles = false;
    });
  }

  private fetchVideos() {
    // show loading
    this.isLoadingVideos = true;
    // fetch data
    const queryId = `video:default:publish:${this.locale}:1`;
    return this.store.dispatch(
      new VideoQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'default')
          .where('status', '==', 'publish')
          .where('locale', '==', this.locale)
          .orderBy('createdAt', 'desc')
          .limit(12)
        ,
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_video)
    )
    .subscribe(videoState => {
      // save videos
      this.videos = videoState.queryList[queryId];
      // reset loading
      this.isLoadingVideos = false;
    });
  }
}
