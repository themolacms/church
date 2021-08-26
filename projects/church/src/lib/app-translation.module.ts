import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_MISSING_HANDLER,
  TranslocoMissingHandler,
  TranslocoModule
} from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}
  getTranslation(locale: string) {
    return this.http.get<Translation>(`./assets/i18n/${locale}.json`);
  }
}
class CustomHandler implements TranslocoMissingHandler {
  handle() {
    return null;
  }
}

@NgModule({
  exports: [ TranslocoModule ],
  imports: [ HttpClientModule ],
  providers: [
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: CustomHandler },
  ]
})
export class AppTranslationModule {}
