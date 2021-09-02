import { Component, Inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import {
  ErrorService,
  NetworkService,
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
  OptionDataService,
  CategoryDataService,
  TagDataService,
  PageDataService,
  PostDataService,
  AudioDataService,
  VideoDataService,
  BundleDataService,
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
    private firebaseStorage: AngularFireStorage,
    // normal services
    public errorService: ErrorService,
    public networkService: NetworkService,
    public localstorageService: LocalstorageService,
    public cacheService: CacheService,
    public appService: AppService,
    public metaService: MetaService,
    public navService: NavService,
    public settingService: SettingService,
    public personaService: PersonaService,
    public pwaService: PwaService,
    public authService: AuthService,
    public userService: UserService,
    public databaseService: DatabaseService,
    public storageService: StorageService,
    // data services
    private optionDataService: OptionDataService,
    private categoryDataService: CategoryDataService,
    private tagDataService: TagDataService,
    private pageDataService: PageDataService,
    private postDataService: PostDataService,
    private audioDataService: AudioDataService,
    private videoDataService: VideoDataService,
    private bundleDataService: BundleDataService,
    private userDataService: UserDataService,
    private profileDataService: ProfileDataService,
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
    this.networkService.init();
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
    this.storageService
      .setIntegrations({ cacheService: this.cacheService })
      .setOptions({
        dateGrouping: true,
        listingCacheTime: 1440, // 24 hours
        listingIgnoreEmptyFolder: true,
      })
      .init(this.firebaseStorage);
    this.appService
      .setOptions({ splashScreen: true })
      .setData(this.config as Record<string, any>)
      .setDataLoader(
        this.optionDataService.record(
          ref => ref
            .where('status', '==', 'publish')
            .where('type', '==', 'default'),
          {
            name: 'Activated app options',
            time: 10080 /* 1 week */
          }
        )
      )
      .init();
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
          persona !== 'dashboard' || !!userService?.allowedLevel(5)
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
        posts: { name: 'posts', text: 'APP.POSTS', routerLink: ['posts'], icon: 'icon-posts' },
        articles: { name: 'articles', text: 'APP.ARTICLES', routerLink: ['articles'], icon: 'icon-articles' },
        videos: { name: 'videos', text: 'APP.VIDEOS', routerLink: ['videos'], icon: 'icon-videos' },
        setting: { name: 'setting', text: 'APP.SETTING', routerLink: ['setting'], icon: 'icon-setting' },
        about: { name: 'about', text: 'APP.ABOUT', routerLink: ['about'], icon: 'icon-about' },
        help: { name: 'help', text: 'APP.HELP', routerLink: ['help'], icon: 'icon-help' },
        more: { name: 'more', text: 'APP.MORE', routerLink: ['more'], icon: 'icon-more' },
      })
      .init({
        default: {
          menu: ['posts', 'videos', 'articles', 'about'],
          tabs: ['home', 'posts', 'videos', 'articles', 'more'],
          more: ['setting', 'about', 'help'],
        },
      });
    this.metaService
      .setIntegrations({ settingService: this.settingService })
      .init(
        this.config.metaService.defaultMetas,
        this.config.metaService.metaTranslations
      );
    // data services
    this.optionDataService
      .setOptions({ advancedMode: true })
      .init();
    this.categoryDataService
      .setOptions({
        advancedMode: true,
      })
      .init();
    this.tagDataService
      .setOptions({ advancedMode: true })
      .init();
    this.pageDataService
      .setOptions({ advancedMode: true })
      .init();
    this.postDataService
      .setOptions({ advancedMode: true })
      .init();
    this.audioDataService
      .setOptions({ advancedMode: true })
      .init();
    this.videoDataService
      .setOptions({ advancedMode: true })
      .init();
    this.bundleDataService
      .setOptions({ advancedMode: true })
      .init();
    this.profileDataService
      .setOptions({ advancedMode: true })
      .init();
  }

}
