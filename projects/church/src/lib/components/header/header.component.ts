import { Component, OnInit, Input } from '@angular/core';
import { AppService, MetaService, UserService, NavService, SettingService, PwaService } from '@lamnhan/ngx-useful';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor(
    public readonly app: AppService,
    public readonly meta: MetaService,
    public readonly user: UserService,
    public readonly nav: NavService,
    public readonly setting: SettingService,
    public readonly pwaService: PwaService,
  ) {}

  ngOnInit(): void {}

  toggleTheme(e: any) {
    return this.setting.changeTheme(e.target.checked ? 'dark' : 'light');
  }
}
