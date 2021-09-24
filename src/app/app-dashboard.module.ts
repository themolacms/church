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
            // register article and video category types
            dashboardService.categoryPart.contentTypes.push(
              { text: 'Articles', value: 'article_category', icon: `icon-articles` },
              { text: 'Videos', value: 'video_category', icon: `icon-videos` },
            );
            // register tag type
            dashboardService.tagPart.contentTypes.push(
              { text: 'Searches', value: 'search', icon: `icon-search` },
            );
            // register article type
            dashboardService.postPart.contentTypes.push(
              { text: 'Articles', value: 'article', icon: `icon-articles` },
            );
            // modify post categories
            dashboardService.postPart.formSchema.forEach((schema, i) => {
              if (schema.name === 'categories' && schema.meta) {
                dashboardService.postPart.formSchema[i] = {
                  ...schema,
                  meta: {
                    ...schema.meta,
                    typeFilter: {default: 'default', article: 'article_category'},
                  },
                };
              }
            });
            // modify video categories
            dashboardService.videoPart.formSchema.forEach((schema, i) => {
              if (schema.name === 'categories' && schema.meta) {
                dashboardService.videoPart.formSchema[i] = {
                  ...schema,
                  meta: {
                    ...schema.meta,
                    typeFilter: {default: 'video_category'},
                  },
                };
              }
            });
          },
        ],
      }),
    }
  ]
})
export class AppDashboardModule {}
