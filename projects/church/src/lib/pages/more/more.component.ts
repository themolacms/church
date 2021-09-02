import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AppService, NavService, SettingService, PersonaService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-more-page',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit, AfterContentInit {
  isDashboardAvailable = false;
  appVersion = '';

  constructor(
    public appService: AppService,
    public navService: NavService,
    public settingService: SettingService,
    public personaService: PersonaService,
    public userService: UserService,
  ) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.isDashboardAvailable = this.userService.allowedLevel(5);
    this.appVersion = this.appService.customData.version as string;
  }

  goDashboard() {
    this.settingService.changePersona('dashboard');
    this.navService.navigate(['app-dashboard']);
  }
}
