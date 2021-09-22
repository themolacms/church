import { Component, OnInit } from '@angular/core';
import { TagDataService, PostDataService, VideoDataService } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private tagDataService: TagDataService,
    private postDataService: PostDataService,
    private videoDataService: VideoDataService,
  ) {}

  ngOnInit(): void {}

}
