import { NgModule } from '@angular/core';
import { NguixDashboardModule, DASHBOARD_CONFIG, dashboardConfig } from '@lamnhan/nguix-dashboard';

@NgModule({
  imports: [NguixDashboardModule],
  exports: [NguixDashboardModule],
  providers: [
    {
      provide: DASHBOARD_CONFIG,
      useValue: dashboardConfig({
        parts: [
          'front',
          'option',
          'page',
          'post',
          'audio',
          'video',
          'bundle',
          'category',
          'tag',
          'media',
          'user',
        ],
        plugins: [
          dashboardService => {
            dashboardService.categoryPart.contentTypes.push(
              { text: 'Articles', value: 'article_category', icon: `icon-articles` },
              { text: 'Videos', value: 'video_category', icon: `icon-videos` },
            );
          },
        ],
      }),
    }
  ]
})
export class AppDashboardModule {}
