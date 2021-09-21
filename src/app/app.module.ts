import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire/compat';

import { MolaAppModule } from '../../projects/church/src/lib/app.module';
import { AppComponent } from '../../projects/church/src/lib/app.component';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppDashboardModule } from './app-dashboard.module';

import { OfflineComponent } from '../../projects/church/src/lib/pages/offline/offline.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [OfflineComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppDashboardModule,
    AppRoutingModule,
    MolaAppModule.forRoot({
      name: environment.name,
      version: environment.version,
      production: environment.production,
      // firebase
      firebase: environment.firebase,
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
        listing: {
          themes: [
            { text: 'THEME.LIGHT', value: 'light' },
          ],
          personas: [
            { text: 'PERSONA.DEFAULT', value: 'default' },
            { text: 'PERSONA.DASHBOARD', value: 'dashboard' }
          ],
          locales: [
            { text: 'English', value: 'en-US' },
          ],
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
