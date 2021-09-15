import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, map } from 'rxjs/operators';
import { Video } from '@lamnhan/schemata';
import { VideoQueryAction, VideoStateModel } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public readonly videos$ = this.store
    .select<VideoStateModel>(state => state.schemata_video)
    .pipe(
      filter(videoState => !!Object.keys(videoState.queryList).length),
      map(videoState =>
        Object.keys(videoState.queryList).reduce(
          (result, queryId) => {
            return result.concat(videoState.queryList[queryId]);
          },
          [] as Video[],
        )
      ),
    );
  
  private pageNo = 1;
  private lastItem: null | Video = null;
  private areThereMore = true;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos() {
    if (!this.areThereMore) return;
    const queryId = `video:default:publish:en-US:${this.pageNo}`;
    this.store.dispatch(
      new VideoQueryAction(
        queryId,
        ref => ref
          .where('type', '==', 'default')
          .where('status', '==', 'publish')
          .where('locale', '==', 'en-US')
          .orderBy('createdAt', 'desc')
          .limit(3),
      )
    );
  }

}
