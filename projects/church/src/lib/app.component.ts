import { Component, Inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {
  ErrorService,
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
import {
  UserDataService,
  ProfileDataService,
} from '@lamnhan/ngx-schemata';

import { APP_CONFIG, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private translateService: TranslocoService,
    public firebaseAuth: AngularFireAuth,
    public firebaseFirestore: AngularFirestore,
    // normal services
    public errorService: ErrorService,
    public localstorageService: LocalstorageService,
    public cacheService: CacheService,
    public metaService: MetaService,
    public appService: AppService,
    public navService: NavService,
    public settingService: SettingService,
    public personaService: PersonaService,
    public pwaService: PwaService,
    public authService: AuthService,
    public userService: UserService,
    public databaseService: DatabaseService,
    public storageService: StorageService,
    // data services
    public userDataService: UserDataService,
    public profileDataService: ProfileDataService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.errorService
      .setOptions({ disabled: !this.config.production })
      .setIntegrations({ userService: this.userService })
      .init({
        projectId: this.config.firebase.projectId,
        apiKey: this.config.firebase.apiKey,
        service: this.config.name,
        version: this.config.version
      });
    this.localstorageService.init();
    this.cacheService.init();
    this.databaseService
      .setOptions({
        driver: 'firestore',
        cacheTime: 1440, // 24 hours
        prerendering: true,
      })
      .setIntegrations({ cacheService: this.cacheService })
      .init(this.firebaseFirestore);
    this.appService.setOptions({ splashScreen: true }).init();
    this.authService.setOptions({driver: 'firestore'}).init(this.firebaseAuth);
    this.userService
      .setOptions({ profilePublished: true })
      .init(this.userDataService, this.profileDataService);
    this.settingService
      .setOptions({
        browserColor: true,
        browserLocale: true,
        waitForNavigationEnd: true,
        usePrioritized: true,
        onReady: () => this.appService.hideSplashScreen(),
        personaValidator: (persona, userService) =>
          persona !== 'admin' || !!userService?.allowedLevel(5)
      })
      .setIntegrations({
        localstorageService: this.localstorageService,
        translateService: this.translateService,
        userService: this.userService,
      })
      .setDefaults(this.config.settingService.defaultSettings)
      .setListing(this.config.settingService.listing)
      .init();
    this.navService
      .setIntegrations({ settingService: this.settingService })
      .init();
    this.pwaService.setOptions({ reminder: 12 }).init();
    this.personaService
      .setIntegrations({
        settingService: this.settingService,
        navService: this.navService,
      })
      .setMenuRegistry({
        home: { name: 'home', text: 'APP.HOME', routerLink: [''], icon: 'icon-home' },
        blog: {
          name: 'blog',
          text: 'APP.BLOG',
          routerLink: ['blog'],
          icon: 'icon-blog',
          activeAlso: ['post']
        },
        user: {
          name: 'user',
          text: 'APP.USER',
          icon: 'icon-user',
          routerLink: this.userService.onUserChanged.pipe(
            map(user => !user ? ['login'] : !user.username ? ['account'] : [user.username, 'account'])
          ),
        },
        setting: { name: 'setting', text: 'APP.SETTING', routerLink: ['setting'], icon: 'icon-setting' },
        about: {
          name: 'about',
          text: 'APP.ABOUT',
          routerLink: ['lamnhan', 'about'],
          icon: 'icon-about',
          activeAlso: ['lamnhan/home']
        },
        help: { name: 'help', text: 'APP.HELP', routerLink: ['help'], icon: 'icon-help' },
      })
      .init({
        default: {
          menu: ['home', 'setting', 'about', 'help'],
          tabs: ['home', 'about'],
        },
        dashboard: {
          tabs: ['home', 'about'],
        }
      });
    this.metaService
      .setIntegrations({ settingService: this.settingService })
      .init(
        this.config.metaService.defaultMetas,
        this.config.metaService.metaTranslations
      );
  }

}
