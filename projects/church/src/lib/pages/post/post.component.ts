import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Post } from '@lamnhan/schemata';
import { PostItemAction, PostStateModel, PostDataService } from '@lamnhan/ngx-schemata';
import { NavService, ModalService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  public readonly page$ = this.route.params
    .pipe(tap(params => this.id = params['id']));
  
  public readonly data$ = this.store
    .select<PostStateModel>(state => state.schemata_post)
    .pipe(
      switchMap(() =>
        this.navService.routeData?.post
          ? of(this.navService.routeData.post as Post)
          : this.store.dispatch(new PostItemAction(this.id))
            .pipe(map(state => (state.schemata_post as PostStateModel).itemRecord[this.id]))
      ),
      map(post => ({ post })),
      tap(data => {
        if (!data.post) return;
        this.postDataService.increment(this.id, { viewCount: 1 });
      }),
    );

  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private modalService: ModalService,
    private navService: NavService,
    private postDataService: PostDataService,
  ) {}

  ngOnInit(): void {}

  contentAddon(articleEl: HTMLElement) {
    // open image in a modal
    const imageEls = articleEl.querySelectorAll('img');
    imageEls.forEach(imageEl =>
      imageEl.addEventListener('click', () => this.modalService.image(imageEl.src).show())
    );
  }
}
