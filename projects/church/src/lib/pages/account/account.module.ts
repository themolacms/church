import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { NguixSpinnerComponentModule, NguixAccountI18nComponentModule } from '@lamnhan/nguix-starter';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NguixSpinnerComponentModule,
    NguixAccountI18nComponentModule,
    AccountRoutingModule
  ]
})
export class AccountPageModule {}
