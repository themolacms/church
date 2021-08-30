import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MetaService, SettingService, NavService, AuthService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-account-page',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public readonly page$ = this.settingService.onLocaleChanged.pipe(
    tap(locale =>
      this.metaService.changePageMetas(
        locale === 'vi-VN' ? {
          title: 'Tài khoản',
          description: 'Quản lý tài khoản của tôi',
        } : {
          title: 'Account',
          description: 'Manage my account',
        },
        true
      )
    )
  );

  constructor(
    private metaService: MetaService,
    private settingService: SettingService,
    public readonly userService: UserService,
  ) {}

  ngOnInit(): void {}

}
