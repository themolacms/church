import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';
import { PageDataService } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  public readonly page$ = combineLatest([
    // retrieve data
    this.route.data.pipe(
      map(data => {
        const defaultLocale = this.settingService.defaultLocale;
        return {
          // default
          defaultLocale,
          ids: { [defaultLocale]: 'privacy' } as Record<string, string>,
          // custom
          ...data,
        };
      })
    ),
    // locale
    this.settingService.onLocaleChanged,
  ])
  .pipe(
    // get the page
    switchMap(([data, locale]) => {
      const { defaultLocale, ids } = data;
      return this.pageDataService.get(ids[locale] || ids[defaultLocale], { time: 10080 })
      // fallback to default if no localized found
      .pipe(
        switchMap(page =>
          page ? of(page) : this.pageDataService.get(ids[defaultLocale], { time: 10080 })
        ),
      );
    }),
    // change metas
    tap(page =>
      !page
        ? false
        : this.metaService.changePageMetas(page)
    ),
  );

  constructor(
    private route: ActivatedRoute,
    public readonly metaService: MetaService,
    public readonly settingService: SettingService,
    public readonly pageDataService: PageDataService,
  ) {}

  ngOnInit(): void {}

}
