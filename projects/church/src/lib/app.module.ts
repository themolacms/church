import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translocoConfig, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import {
  LocalstorageService,
  CacheService,
  AppService,
  MetaService,
  NavService,
  SettingService,
} from '@lamnhan/ngx-useful';
import { NguixHeaderComponentModule, NguixFooterComponentModule } from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslationModule } from './app-translation.module';
import { AppDashboardModule } from './app-dashboard.module';
import { AppComponent } from './app.component';
import { AppConfig, APP_CONFIG } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslationModule,
    AppDashboardModule,
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
  ],
})
export class MolaAppModule {
  static forRoot(config: AppConfig): ModuleWithProviders<MolaAppModule> {
    return {
      ngModule: MolaAppModule,
      providers: [
        LocalstorageService,
        CacheService,
        AppService,
        MetaService,
        NavService,
        SettingService,
        {
          provide: LOCALE_ID,
          useValue: config.translocoConfig.defaultLang,
        },
        {
          provide: TRANSLOCO_CONFIG,
          useValue: config.translocoConfig,
        },
        {
          provide: APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
