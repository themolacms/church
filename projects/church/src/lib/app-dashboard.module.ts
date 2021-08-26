import { NgModule } from '@angular/core';
import { NguixDashboardModule, DASHBOARD_CONFIG, dashboardConfig } from '@lamnhan/nguix-dashboard';

@NgModule({
  exports: [NguixDashboardModule],
  imports: [],
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
              { text: 'Genre', value: 'genre', icon: `icon-dashboard-part-category` },
            );
          },
        ],
      }),
    }
  ]
})
export class AppDashboardModule {}
