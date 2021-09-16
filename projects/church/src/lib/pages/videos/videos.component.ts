import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, map, tap } from 'rxjs/operators';
import { Video } from '@lamnhan/schemata';
import { VideoQueryAction, VideoStateModel } from '@lamnhan/ngx-schemata';
import { SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public page$ = this.settingService.onLocaleChanged
    .pipe(
      tap(locale => {
        this.locale = locale;
        return this.fetchVideos();
      })
    );

  public readonly videos$ = this.store
    .select<VideoStateModel>(state => state.schemata_video)
    .pipe(
      filter(videoState => !!Object.keys(videoState.queryList).length),
      tap(videoState => {
        const latestQueryResult = videoState.queryList[this.latestQueryId];
        this.areThereMore = !!latestQueryResult.length;
        this.latestItem = !this.areThereMore
          ? this.latestItem
          : latestQueryResult[latestQueryResult.length - 1];
        // reset loading more status
        this.isLoadingMore = false;
      }),
      map(videoState =>
        Object.keys(videoState.queryList)
        .filter(queryId => queryId.includes(`:${this.locale}:`)) // filter by locale
        .reduce(
          (result, queryId) => {
            return result.concat(videoState.queryList[queryId]);
          },
          [] as Video[],
        )
      ),
    );
  
  private locale!: string;

  private latestQueryId!: string;
  private latestItem?: Video;

  private pageNo = 1;
  private areThereMore = true;

  isLoadingMore = false;

  constructor(
    private store: Store,
    private settingService: SettingService,
  ) {}

  ngOnInit(): void {}

  fetchVideos() {
    if (!this.areThereMore) return;
    this.isLoadingMore = true;
    setTimeout(() => this.isLoadingMore = false, 3000);
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
          return query.limit(3);
        },
      )
    );
  }

}
