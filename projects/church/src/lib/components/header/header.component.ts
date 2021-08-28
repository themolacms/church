import { Component, OnInit, Input } from '@angular/core';
import { AppService, UserService, NavService } from '@lamnhan/ngx-useful';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor(
    public readonly appService: AppService,
    public readonly userService: UserService,
    public readonly navService: NavService,
  ) {}

  ngOnInit(): void {}
}
