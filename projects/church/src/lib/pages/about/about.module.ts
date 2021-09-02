import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixContentComponentModule,
    AboutRoutingModule
  ]
})
export class AboutPageModule { }
