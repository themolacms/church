import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import {
  NguixSpinnerComponentModule,
  NguixPostsI18nComponentModule,
  NguixSkeletonPostsComponentModule,
} from '@lamnhan/nguix-starter';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterLinkDirectiveModule,
    NguixSpinnerComponentModule,
    NguixPostsI18nComponentModule,
    NguixSkeletonPostsComponentModule,
    PostsRoutingModule
  ]
})
export class PostsPageModule { }
