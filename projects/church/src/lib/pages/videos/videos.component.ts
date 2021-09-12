import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { VideoQuery } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.store.dispatch(
      new VideoQuery(
        'Video list',
        ref => ref
          .where('type', '==', 'default')
          .where('status', '==', 'publish')
          .where('locale', '==', 'en-US')
          .orderBy('createdAt', 'desc')
          .limit(10),
      )
    ).subscribe(console.log);
  }

}
