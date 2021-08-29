import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { NguixSpinnerComponentModule, NguixRegisterI18nComponentModule } from '@lamnhan/nguix-starter';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixSpinnerComponentModule,
    NguixRegisterI18nComponentModule,
    RegisterRoutingModule,
  ]
})
export class RegisterPageModule {}
