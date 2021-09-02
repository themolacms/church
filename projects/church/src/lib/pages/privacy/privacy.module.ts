import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';


@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixContentComponentModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyPageModule { }
