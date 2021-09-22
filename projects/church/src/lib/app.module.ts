import { NgModule, ModuleWithProviders, Injectable, ErrorHandler, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
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
  HelperService,
  ErrorService,
  NetworkService,
  LocalstorageService,
  CacheService,
  FetchService,
  AlertService,
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
import {
  // data services
  OptionDataService,
  CategoryDataService,
  TagDataService,
  PageDataService,
  PostDataService,
  AudioDataService,
  VideoDataService,
  BundleDataService,
  ProfileDataService,
  UserDataService,
  // state
  CategoryState,
  TagState,
  PageState,
  PostState,
  VideoState,
} from '@lamnhan/ngx-schemata';
import { NguixDashboardHeaderComponentModule } from '@lamnhan/nguix-dashboard';

import { AppConfig, APP_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppTranslationModule } from './app-translation.module';

import { HeaderComponentModule } from './components/header/header.module';
import { TabsComponentModule } from './components/tabs/tabs.module';
import {
  NguixNetworkIndicatorI18nComponentModule,
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
    NgxsModule.forRoot(
      [
        CategoryState,
        TagState,
        PageState,
        PostState,
        VideoState,
      ],
      { developmentMode: false }
    ),
    AppTranslationModule,
    NguixDashboardHeaderComponentModule,
    HeaderComponentModule,
    TabsComponentModule,
    NguixNetworkIndicatorI18nComponentModule,
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
        HelperService,
        NetworkService,
        LocalstorageService,
        CacheService,
        FetchService,
        AlertService,
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
        // ngx-schemata
        OptionDataService,
        CategoryDataService,
        TagDataService,
        PageDataService,
        PostDataService,
        AudioDataService,
        VideoDataService,
        BundleDataService,
        ProfileDataService,
        UserDataService,
      ],
    };
  }
}
