import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
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
    RouterLinkDirectiveModule,
    NguixSpinnerComponentModule,
    NguixVideosI18nComponentModule,
    NguixSkeletonVideosComponentModule,
    VideosRoutingModule
  ]
})
export class VideosPageModule { }
