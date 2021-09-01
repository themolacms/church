import { Component, OnInit } from '@angular/core';
import { PersonaService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-more-page',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
  }

}
