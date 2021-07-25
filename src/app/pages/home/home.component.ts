import { Component, OnInit } from '@angular/core';
import { MetaService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
  }
}
