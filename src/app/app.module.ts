import { NgModule, LOCALE_ID } from '@angular/core';
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
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslationModule,
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
    LocalstorageService,
    CacheService,
    AppService,
    MetaService,
    NavService,
    SettingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
