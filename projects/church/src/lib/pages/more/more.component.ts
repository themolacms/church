import { Component, OnInit } from '@angular/core';
import { PersonaService, SettingService, NavService } from '@lamnhan/ngx-useful';

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
  ) {}

  ngOnInit(): void {
  }

  goDashboard() {
    this.settingService.changePersona('dashboard');
    this.navService.navigate(['app-admin']);
  }

}
