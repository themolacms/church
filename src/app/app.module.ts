import { NgModule, LOCALE_ID } from '@angular/core';
import { translocoConfig, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { environment } from '../environments/environment';

import { MolaAppModule, AppComponent } from '@molacms/church';

@NgModule({
  imports: [MolaAppModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en-US'],
        defaultLang: 'en-US',
        fallbackLang: 'en-US',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
