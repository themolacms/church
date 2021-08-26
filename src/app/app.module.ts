import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MolaAppModule, AppComponent } from '@molacms/church';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    MolaAppModule.forRoot({
      // i18n
      translocoConfig: {
        availableLangs: ['en-US'],
        defaultLang: 'en-US',
        fallbackLang: 'en-US',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      // SettingService
      settingService: {
        defaultSettings: {
          theme: 'light',
          locale: 'en-US',
          persona: 'default',
        },
      },
      // MetaService
      metaService: {
        defaultMetas: {
          url: 'https://church-preview.lamnhan.com/',
          title: 'Church Theme',
          description: 'The Church theme',
          image: 'https://church-preview.lamnhan.com/assets/images/featured.jpg',
          locale: 'en-US',
        },
        /* MOLA:META_TRANSLATIONS */
      }
    }),
  ],
})
export class AppModule {}
