import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';


@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpPageModule { }
