import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NguixSpinnerComponentModule,
  NguixPostsI18nComponentModule,
  NguixSkeletonPostsComponentModule,
  NguixVideosI18nComponentModule,
  NguixSkeletonVideosComponentModule,
} from '@lamnhan/nguix-starter';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NguixSpinnerComponentModule,
    NguixPostsI18nComponentModule,
    NguixSkeletonPostsComponentModule,
    NguixVideosI18nComponentModule,
    NguixSkeletonVideosComponentModule,
    SearchRoutingModule
  ]
})
export class SearchPageModule { }
