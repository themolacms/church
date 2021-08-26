import { InjectionToken } from '@angular/core';
import { TranslocoConfig } from '@ngneat/transloco';
import {
  AppMetas,
  MetaTranslations,
  AppSettings,
} from '@lamnhan/ngx-useful';

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export interface AppConfig {
  // i18n
  translocoConfig: Partial<TranslocoConfig>;
  // SettingService
  settingService: {
    defaultSettings: AppSettings;
  };
  // MetaService
  metaService: {
    defaultMetas: AppMetas;
    metaTranslations?: MetaTranslations;
  };
}