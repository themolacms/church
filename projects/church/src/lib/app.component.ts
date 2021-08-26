import { Component, Inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import {
  MenuItem,
  LocalstorageService,
  CacheService,
  AppService,
  MetaService,
  NavService,
  SettingService,
} from '@lamnhan/ngx-useful';

import { APP_CONFIG, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerMenu: MenuItem[] = [
    { text: 'APP.HOME', routerLink: [] },
    { text: 'APP.ABOUT', routerLink: ['about'] },
  ];

  footerMenu: MenuItem[] = [
    { text: 'Lam Nhan', href: 'https://lamnhan.com', target: '_blank' },
    { text: 'Mola CMS', href: 'https://mola.lamnhan.com', target: '_blank' },
    { text: 'Source code', href: 'https://github.com/themolacms/church', target: '_blank' }
  ];
  
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private translateService: TranslocoService,
    public localstorageService: LocalstorageService,
    public cacheService: CacheService,
    public appService: AppService,
    public metaService: MetaService,
    public navService: NavService,
    public settingService: SettingService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.cacheService.init();
    this.appService.setOptions({ splashScreen: true }).init();
    this.settingService
      .setOptions({
        onReady: () => this.appService.hideSplashScreen(),
      })
      .setDefaults(this.config.settingService.defaultSettings)
      .setIntegrations({
        localstorageService: this.localstorageService,
        translateService: this.translateService,
      })
      .init();
    this.navService
      .setIntegrations({ settingService: this.settingService })
      .init();
    this.metaService
      .setIntegrations({ settingService: this.settingService })
      .init(
        this.config.metaService.defaultMetas,
        this.config.metaService.metaTranslations
      );
  }

}
