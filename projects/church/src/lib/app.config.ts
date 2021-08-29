import { InjectionToken } from '@angular/core';
import { TranslocoConfig } from '@ngneat/transloco';
import {
  AppMetas,
  MetaTranslations,
  AppSettings,
  BuiltinListing,
} from '@lamnhan/ngx-useful';

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export interface FirebaseAppConfig {
  apiKey:            string;
  authDomain:        string;
  projectId:         string;
  storageBucket:     string;
  messagingSenderId: string;
  appId:             string;
  measurementId:     string;
}

export interface AppConfig {
  name: string;
  version: string;
  production: boolean;
  // firebase
  firebase: FirebaseAppConfig;
  // i18n
  translocoConfig: Partial<TranslocoConfig>;
  // SettingService
  settingService: {
    defaultSettings: AppSettings;
    listing: BuiltinListing;
  };
  // MetaService
  metaService: {
    defaultMetas: AppMetas;
    metaTranslations?: MetaTranslations;
  };
}