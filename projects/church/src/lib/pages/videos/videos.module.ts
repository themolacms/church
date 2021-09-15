import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixVideosI18nComponentModule } from '@lamnhan/nguix-starter';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixVideosI18nComponentModule,
    VideosRoutingModule
  ]
})
export class VideosPageModule { }
