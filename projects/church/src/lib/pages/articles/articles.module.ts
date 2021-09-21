import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  NguixSpinnerComponentModule,
  NguixPostsI18nComponentModule,
  NguixSkeletonPostsComponentModule,
} from '@lamnhan/nguix-starter';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    NguixSpinnerComponentModule,
    NguixPostsI18nComponentModule,
    NguixSkeletonPostsComponentModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesPageModule { }
