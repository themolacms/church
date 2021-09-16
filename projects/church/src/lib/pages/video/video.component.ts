import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Video } from '@lamnhan/schemata';
import { VideoItemAction, VideoStateModel, VideoDataService } from '@lamnhan/ngx-schemata';
import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public readonly page$ = this.route.params
    .pipe(tap(params => this.id = params['id']));
  
  public readonly data$ = this.store
    .select<VideoStateModel>(state => state.schemata_video)
    .pipe(
      switchMap(() =>
        this.navService.routeData?.video
          ? of(this.navService.routeData.video as Video)
          : this.store.dispatch(new VideoItemAction(this.id))
            .pipe(map(state => (state.schemata_video as VideoStateModel).itemRecord[this.id]))
      ),
      map(video => ({ video })),
      tap(data => {
        if (!data.video) return;
        this.videoDataService.increment(this.id, { viewCount: 1 });
      }),
    );

  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private navService: NavService,
    private videoDataService: VideoDataService,
  ) {}

  ngOnInit(): void {}

}
