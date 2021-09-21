import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { NetworkService, NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-offline-page',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit, OnDestroy {
  private networkSubscription?: Subscription;

  constructor(
    private networkService: NetworkService,
    private navService: NavService
  ) {}

  ngOnInit(): void {
    if (!this.networkService.isOnline) {
      this.networkSubscription = this.networkService.onChanged.subscribe(isOnline => {
        const redirectUrl = this.networkService.redirectUrl;
        if (isOnline && redirectUrl) {
          this.navService.navigate(redirectUrl);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.networkSubscription) {
      this.networkSubscription.unsubscribe();
    }
  }
}
