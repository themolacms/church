import { InjectionToken } from '@angular/core';
import { TranslocoConfig } from '@ngneat/transloco';

export interface AppConfig {
  translocoConfig: Partial<TranslocoConfig>;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');
