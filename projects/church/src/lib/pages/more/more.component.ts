import { Component, OnInit } from '@angular/core';
import { NavService, SettingService, PersonaService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-more-page',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(
    public navService: NavService,
    public settingService: SettingService,
    public personaService: PersonaService,
    public userService: UserService,
  ) {}

  ngOnInit(): void {
  }

  goDashboard() {
    this.settingService.changePersona('dashboard');
    this.navService.navigate(['app-admin']);
  }

}
