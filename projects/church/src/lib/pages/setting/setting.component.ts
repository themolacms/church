import { Component, OnInit } from '@angular/core';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingPage implements OnInit {

  constructor(
    public readonly metaService: MetaService,
    public readonly settingService: SettingService
  ) {}

  ngOnInit(): void {}

  toggleTheme(e: any) {
    return this.settingService.changeTheme(e.target.checked ? 'dark' : 'light');
  }

}
