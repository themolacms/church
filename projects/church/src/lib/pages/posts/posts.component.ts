import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, tap, take } from 'rxjs/operators';
import { Post } from '@lamnhan/schemata';
import { PostQueryAction } from '@lamnhan/ngx-schemata';
import { SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public page$ = this.settingService.onLocaleChanged.pipe(
    tap(locale =>  (this.locale = locale) && this.fetchPosts()),
  );

  private locale!: string;

  private latestQueryId!: string;
  private latestItem?: Post;

  private pageNo = 1;
  private areThereMore = true;

  posts: Post[] = [];
  isLoadingMore = false;

  constructor(
    private store: Store,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {}

  fetchPosts() {
    if (!this.areThereMore || this.isLoadingMore) return;
    // show loading
    this.isLoadingMore = true;
    setTimeout(() => this.isLoadingMore = false, 3000);
    // fetch data
    const queryPrefix = `post:default:publish:${this.locale}`;
    this.latestQueryId = `${queryPrefix}:${this.pageNo++}`;
    this.store.dispatch(
      new PostQueryAction(
        this.latestQueryId,
        ref => {
          let query = ref
            .where('type', '==', 'default')
            .where('status', '==', 'publish')
            .where('locale', '==', this.locale)
            .orderBy('createdAt', 'desc');
          if (this.latestItem) {
            query = query.startAfter(this.latestItem.createdAt);
          }
          return query.limit(12);
        },
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_post)
    )
    .subscribe(postState => {
      const latestQueryResult = postState.queryList[this.latestQueryId];
      // save metas
      this.areThereMore = !!latestQueryResult.length;
      this.latestItem = !this.areThereMore
        ? this.latestItem
        : latestQueryResult[latestQueryResult.length - 1];
      // save posts
      this.posts = Object.keys(postState.queryList)
        .filter(queryId => queryId.includes(queryPrefix)) // filter queries
        .reduce(
          (result, queryId) => {
            return result.concat(postState.queryList[queryId]);
          },
          [] as Post[],
        );
      // reset loading
      this.isLoadingMore = false;
    });
  }

}
