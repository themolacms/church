import { NgModule, ModuleWithProviders, Injectable, ErrorHandler, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TRANSLOCO_CONFIG } from '@ngneat/transloco';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
  DEBUG_MODE,
  APP_NAME,
  APP_VERSION,
} from '@angular/fire/compat/analytics';
import {
  ErrorService,
  AlertService,
  LocalstorageService,
  CacheService,
  AppService,
  MetaService,
  NavService,
  SettingService,
  PersonaService,
  PwaService,
  AuthService,
  UserService,
  DatabaseService,
  StorageService,
} from '@lamnhan/ngx-useful';

import { AppConfig, APP_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppTranslationModule } from './app-translation.module';
import { AppDashboardModule } from './app-dashboard.module';

import { HeaderComponentModule } from './components/header/header.module';
import { TabsComponentModule } from './components/tabs/tabs.module';
import {
  NguixNavIndicatorI18nComponentModule,
  NguixPwaReminderI18nComponentModule,
} from '@lamnhan/nguix-starter';

@Injectable({providedIn: 'root'})
export class AppErrorHandler implements ErrorHandler {
  constructor(private readonly errorService: ErrorService) {}
  handleError(error: any) {
    this.errorService.report(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireAnalyticsModule,
    AppTranslationModule,
    AppDashboardModule,
    HeaderComponentModule,
    TabsComponentModule,
    NguixNavIndicatorI18nComponentModule,
    NguixPwaReminderI18nComponentModule,
  ],
})
export class MolaAppModule {
  static forRoot(config: AppConfig): ModuleWithProviders<MolaAppModule> {
    return {
      ngModule: MolaAppModule,
      providers: [
        // app config
        {
          provide: APP_CONFIG,
          useValue: config,
        },
        // i18n
        {
          provide: LOCALE_ID,
          useValue: config.translocoConfig.defaultLang,
        },
        {
          provide: TRANSLOCO_CONFIG,
          useValue: config.translocoConfig,
        },
        // error reporting
        {
          provide: ErrorHandler,
          useClass: AppErrorHandler,
        },
        // analytics
        {
          provide: APP_NAME,
          useValue: config.name,
        },
        {
          provide: APP_VERSION,
          useValue: config.version,
        },
        {
          provide: DEBUG_MODE,
          useValue: !config.production,
        },
        ScreenTrackingService,
        UserTrackingService,
        // ngx-useful
        AlertService,
        LocalstorageService,
        CacheService,
        AppService,
        MetaService,
        NavService,
        SettingService,
        PersonaService,
        PwaService,
        AuthService,
        UserService,
        DatabaseService,
        StorageService,
      ],
    };
  }
}
