import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixPostComponentModule, NguixSkeletonPostComponentModule } from '@lamnhan/nguix-starter';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixPostComponentModule,
    NguixSkeletonPostComponentModule,
    PostRoutingModule
  ]
})
export class PostPageModule { }
