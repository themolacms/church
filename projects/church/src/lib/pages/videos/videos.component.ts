import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Category, Video } from '@lamnhan/schemata';
import { CategoryStateModel, CategoryQueryAction, VideoStateModel, VideoQueryAction } from '@lamnhan/ngx-schemata';
import { SettingService } from '@lamnhan/ngx-useful';

interface GroupingTrackerItem {
  latestQueryId: string;
  latestItem?: Video;
  pageNo: number;
  areThereMore: boolean;
}

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
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
      // fetch videos
      this.activeGroupName = !params.categoryId ? 'all' : params.categoryId;
      if (!this.groupingTracker[this.activeGroupName]) {
        this.groupingTracker[this.activeGroupName] = {
          latestQueryId: '',
          latestItem: undefined,
          pageNo: 1,
          areThereMore: true,
        };
      }
      this.fetchVideos();
    }),
  );

  private locale!: string;

  private groupingTracker: Record<string, GroupingTrackerItem> = {};
  activeGroupName = 'all';

  categories: Category[] = [];

  videos: Video[] = [];
  isLoadingMore = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {}

  fetchVideos() {
    const activeGroup = this.groupingTracker[this.activeGroupName];
    // nothing else
    if (!activeGroup.areThereMore || this.isLoadingMore) return;
    // show loading
    this.isLoadingMore = true;
    setTimeout(() => this.isLoadingMore = false, 3000);
    // fetch data
    const queryPrefix = `video:default:publish:${this.locale}:${this.activeGroupName}`;
    activeGroup.latestQueryId = `${queryPrefix}:${activeGroup.pageNo++}`;
    return this.store.dispatch(
      new VideoQueryAction(
        activeGroup.latestQueryId,
        ref => {
          let query = ref
            .where('type', '==', 'default')
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
      map(state => state.schemata_video as VideoStateModel)
    )
    .subscribe(videoState => {
      const activeGroup = this.groupingTracker[this.activeGroupName];
      const latestQueryResult = videoState.queryList[activeGroup.latestQueryId];
      // save metas
      activeGroup.areThereMore = !!latestQueryResult.length;
      activeGroup.latestItem = !activeGroup.areThereMore
        ? activeGroup.latestItem
        : latestQueryResult[latestQueryResult.length - 1];
      // save videos
      this.videos = Object.keys(videoState.queryList)
        .filter(queryId => queryId.includes(queryPrefix)) // filter queries
        .reduce(
          (result, queryId) => {
            return result.concat(videoState.queryList[queryId]);
          },
          [] as Video[],
        );
      // reset loading
      this.isLoadingMore = false;
    });
  }

  private fetchCategories() {
    const queryId = `category:video_category:publish:${this.locale}`;
    return this.store.dispatch(
      new CategoryQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'video_category')
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
