import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixSpinnerComponentModule, NguixOopsI18nComponentModule } from '@lamnhan/nguix-starter';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';


@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    NguixSpinnerComponentModule,
    NguixOopsI18nComponentModule,
    MemberRoutingModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'app-member-page', alias: 'APP_MEMBER_PAGE' },
  }],
})
export class MemberPageModule { }
