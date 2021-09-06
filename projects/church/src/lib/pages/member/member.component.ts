import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, combineLatest } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { Profile } from '@lamnhan/schemata';
import { MetaService, SettingService, UserService } from '@lamnhan/ngx-useful';
import { ProfileDataService } from '@lamnhan/ngx-schemata';

interface PageParams {
  username?: string;
  route?: string;
  itemId?: string;
}

@Component({
  selector: 'app-member-page',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  username = 'lamnhan';
  mine = false;
  route = 'home';
  itemId?: string;

  public readonly profile$ = combineLatest([
    this.user.onUserChanged,
    this.settingService.onLocaleChanged
  ]).pipe(
    // get params
    switchMap(() => this.activatedRoute.params),
    // set data
    switchMap(params => {
      const {username, route, itemId} = params as PageParams;
      this.username = username || 'lamnhan';
      this.mine = !!(this.user.currentUser && this.user.username && this.user.username === this.username);
      this.route = route || 'home';
      this.itemId = itemId;
      return of(this.username);
    }),
    // load profile
    switchMap(id => this.profileDataService.get(id)),
    // process the profile
    map(profile => !profile || profile.status !== 'publish' ? {} as Profile : profile),
    // make actions
    tap(profile => {
      const locale = this.settingService.locale;
      // has profile
      if (profile.id) {
        this.toggleRoute(profile);
        // set meta
        this.metaService.changePageMetas(
          locale === 'vi-VN' ? {
            title: `${profile.title}`,
            description: profile.description || `Hồ sơ của ${profile.title}.`,
          } : {
            title: `${profile.title}`,
            description: profile.description || `The profile of ${profile.title}.`,
          },
          true
        );
      }
      // no profile
      else {
        this.metaService.changePageMetas(
          locale === 'vi-VN' ? {
            title: 'Có lỗi!',
            description: 'Không tìm thấy thành viên.',
          } : {
            title: 'Oops!',
            description: 'Member not found.',
          },
          true
        );
      }
    }),
  );

  homeRoute$?: Observable<boolean>;
  aboutRoute$?: Observable<boolean>;
  accountRoute$?: Observable<boolean>;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private settingService: SettingService,
    private profileDataService: ProfileDataService,
    public readonly user: UserService,
  ) {}

  ngOnInit(): void {}

  openCover(profile: Profile) {
    console.log('Open ...');
  }

  openAvatar(profile: Profile) {
    console.log('Open ...');
  }

  private toggleRoute(profile: Profile) {
    if (
      (this.route === 'account' && !this.mine)
      || (this.route === 'about' && !profile.description)
    ) {
      this.location.replaceState(this.location.path().replace(`/${this.route}`, ''));
      this.route = 'home';
    }
    switch (this.route) {
      case 'account':
        this.loadAccountRoute();
        break;
      case 'about':
        this.loadAboutRoute();
        break;
      case 'home':
      default:
        this.loadHomeRoute();
        break;
    }
  }

  private loadHomeRoute() {
    if (!this.homeRoute$) {
      this.homeRoute$ = of(true);
    }
  }

  private loadAboutRoute() {
    if (!this.aboutRoute$) {
      this.aboutRoute$ = of(true);
    }
  }

  private loadAccountRoute() {
    if (!this.accountRoute$) {
      this.accountRoute$ = of(true);
    }
  }

}
