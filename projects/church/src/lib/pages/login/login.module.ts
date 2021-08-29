import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { NguixSpinnerComponentModule, NguixLoginI18nComponentModule } from '@lamnhan/nguix-starter';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixSpinnerComponentModule,
    NguixLoginI18nComponentModule,
    LoginRoutingModule,
  ]
})
export class LoginPageModule {}
