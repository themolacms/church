import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixPostComponentModule, NguixSkeletonPostComponentModule } from '@lamnhan/nguix-starter';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixPostComponentModule,
    NguixSkeletonPostComponentModule,
    ArticleRoutingModule
  ]
})
export class ArticlePageModule { }
