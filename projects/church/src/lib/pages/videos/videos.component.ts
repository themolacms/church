import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { QueryFn } from '@angular/fire/compat/firestore';
import { VideoQuery } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      new VideoQuery(
        'Video list',
        (
          ref =>  ref
        ) as QueryFn,
      )
    );
  }

}
