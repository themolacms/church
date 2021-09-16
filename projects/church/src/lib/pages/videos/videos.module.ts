import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import {
  NguixSpinnerComponentModule,
  NguixVideosI18nComponentModule,
  NguixSkeletonVideosComponentModule,
} from '@lamnhan/nguix-starter';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    VirtualScrollerModule,
    NguixSpinnerComponentModule,
    NguixVideosI18nComponentModule,
    NguixSkeletonVideosComponentModule,
    VideosRoutingModule
  ]
})
export class VideosPageModule { }
