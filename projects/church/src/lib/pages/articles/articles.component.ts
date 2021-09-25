import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Category, Post } from '@lamnhan/schemata';
import { CategoryStateModel, CategoryQueryAction, PostStateModel, PostQueryAction } from '@lamnhan/ngx-schemata';
import { SettingService } from '@lamnhan/ngx-useful';

interface GroupingTrackerItem {
  latestQueryId: string;
  latestItem?: Post;
  pageNo: number;
  areThereMore: boolean;
}

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public page$ = combineLatest([
    this.route.params,
    this.settingService.onLocaleChanged
  ])
  .pipe(
    tap(([params, locale]) => {
      this.locale = locale;
      // fetch categories
      if (!this.categories.length) {
        this.fetchCategories();
      }
      // fetch posts
      this.activeGroupName = !params.categoryId ? 'all' : params.categoryId;
      if (!this.groupingTracker[this.activeGroupName]) {
        this.groupingTracker[this.activeGroupName] = {
          latestQueryId: '',
          latestItem: undefined,
          pageNo: 1,
          areThereMore: true,
        };
      }
      this.fetchPosts();
    }),
  );

  private locale!: string;

  private groupingTracker: Record<string, GroupingTrackerItem> = {};
  activeGroupName = 'all';

  categories: Category[] = [];

  posts: Post[] = [];
  isLoadingMore = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {}

  fetchPosts() {
    const activeGroup = this.groupingTracker[this.activeGroupName];
    // nothing else
    if (!activeGroup.areThereMore || this.isLoadingMore) return;
    // show loading
    this.isLoadingMore = true;
    setTimeout(() => this.isLoadingMore = false, 3000);
    // fetch data
    const queryPrefix = `post:article:publish:${this.locale}:${this.activeGroupName}`;
    activeGroup.latestQueryId = `${queryPrefix}:${activeGroup.pageNo++}`;
    return this.store.dispatch(
      new PostQueryAction(
        activeGroup.latestQueryId,
        ref => {
          let query = ref
            .where('type', '==', 'article')
            .where('status', '==', 'publish')
            .where('locale', '==', this.locale)
            .orderBy('createdAt', 'desc')
          if (this.activeGroupName !== 'all') {
            const categoryId = this.activeGroupName;
            query = query.where(`categories.${categoryId}.id`, '==', categoryId);
          }
          if (activeGroup.latestItem) {
            query = query.startAfter(activeGroup.latestItem.createdAt);
          }
          return query.limit(3);
        },
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_post as PostStateModel)
    )
    .subscribe(postState => {
      const activeGroup = this.groupingTracker[this.activeGroupName];
      const latestQueryResult = postState.queryList[activeGroup.latestQueryId];
      // save metas
      activeGroup.areThereMore = !!latestQueryResult.length;
      activeGroup.latestItem = !activeGroup.areThereMore
        ? activeGroup.latestItem
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

  private fetchCategories() {
    const queryId = `category:article_category:publish:${this.locale}`;
    return this.store.dispatch(
      new CategoryQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'article_category')
          .where('status', '==', 'publish')
          .where('locale', '==', this.locale)
          .orderBy('count', 'desc')
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_category as CategoryStateModel)
    )
    .subscribe(categoryState => this.categories = categoryState.queryList[queryId]);
  }

}
