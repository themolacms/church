import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import {
  NguixIconComponentModule,
  NguixPostsI18nComponentModule,
  NguixSkeletonPostsComponentModule,
  NguixVideosI18nComponentModule,
  NguixSkeletonVideosComponentModule,
} from '@lamnhan/nguix-starter';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.component';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    NguixIconComponentModule,
    NguixPostsI18nComponentModule,
    NguixSkeletonPostsComponentModule,
    NguixVideosI18nComponentModule,
    NguixSkeletonVideosComponentModule,
    HomeRoutingModule,
  ]
})
export class HomePageModule {}
