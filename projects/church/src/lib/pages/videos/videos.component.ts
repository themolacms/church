import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, tap, take } from 'rxjs/operators';
import { Video } from '@lamnhan/schemata';
import { VideoQueryAction } from '@lamnhan/ngx-schemata';
import { SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public page$ = this.settingService.onLocaleChanged.pipe(
    tap(locale =>  (this.locale = locale) && this.fetchVideos()),
  );

  private locale!: string;

  private latestQueryId!: string;
  private latestItem?: Video;

  private pageNo = 1;
  private areThereMore = true;

  videos: Video[] = [];
  isLoadingMore = false;

  constructor(
    private store: Store,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {}

  fetchVideos() {
    if (!this.areThereMore || this.isLoadingMore) return;
    // show loading
    this.isLoadingMore = true;
    setTimeout(() => this.isLoadingMore = false, 3000);
    // fetch data
    this.latestQueryId = `video:default:publish:${this.locale}:${this.pageNo++}`;
    this.store.dispatch(
      new VideoQueryAction(
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
          return query.limit(5);
        },
      )
    )
    .pipe(
      take(1),
      map(state => state.schemata_video)
    )
    .subscribe(videoState => {
      const latestQueryResult = videoState.queryList[this.latestQueryId];
      // save metas
      this.areThereMore = !!latestQueryResult.length;
      this.latestItem = !this.areThereMore
        ? this.latestItem
        : latestQueryResult[latestQueryResult.length - 1];
      // save videos
      this.videos = Object.keys(videoState.queryList)
        .filter(queryId => queryId.includes(`:default:publish:${this.locale}:`)) // filter queries
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

}
