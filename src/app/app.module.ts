import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { MolaAppModule, AppComponent } from '@molacms/church';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    MolaAppModule.forRoot({
      translocoConfig: {
        availableLangs: ['en-US'],
        defaultLang: 'en-US',
        fallbackLang: 'en-US',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
    }),
  ],
})
export class AppModule {}
