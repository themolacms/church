import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { MoreRoutingModule } from './more-routing.module';
import { MoreComponent } from './more.component';


@NgModule({
  declarations: [
    MoreComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    MoreRoutingModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'app-more-page', alias: 'APP_MORE_PAGE' }
  }],
})
export class MorePageModule { }
