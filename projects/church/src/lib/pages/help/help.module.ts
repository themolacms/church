import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSpinnerComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';


@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    NguixSpinnerComponentModule,
    NguixContentComponentModule,
    HelpRoutingModule
  ]
})
export class HelpPageModule { }
