import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  providers: [
    LocalstorageService,
    CacheService,
    AppService,
    MetaService,
    NavService,
    SettingService,
  ],
})
export class MolaAppModule {}
