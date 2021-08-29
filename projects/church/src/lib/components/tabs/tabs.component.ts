import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {}

}
