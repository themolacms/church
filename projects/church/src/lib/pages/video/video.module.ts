import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixVideoComponentModule } from '@lamnhan/nguix-starter';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';


@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    NguixVideoComponentModule,
    VideoRoutingModule
  ]
})
export class VideoPageModule { }
