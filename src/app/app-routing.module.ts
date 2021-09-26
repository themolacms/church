import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, OnlineGuard } from '@lamnhan/ngx-useful';

import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [
  {
    path: 'offline',
    component: OfflineComponent,
  },
  // home
  {
    path: '',
    pathMatch: 'full',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/home/home.module').then(m => m.HomePageModule),
  },
  // search
  {
    path: 'search',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/search/search.module').then(m => m.SearchPageModule),
  },
  // settings
  {
    path: 'setting',
    loadChildren: () => import('@molacms/church').then(m => m.SettingPageModule),
  },
  // auth
  {
    path: 'login',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.LoginPageModule),
  },
  {
    path: 'login/guard/:guardName',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.RegisterPageModule),
  },
  // user
  {
    path: 'account',
    canLoad: [OnlineGuard, AuthGuard],
    canActivate: [OnlineGuard, AuthGuard],
    loadChildren: () => import('@molacms/church').then(m => m.AccountPageModule),
  },
  {
    path: 'member/:username/:route/:itemId',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/member/member.module').then(m => m.MemberPageModule)
  },
  {
    path: 'member/:username/:route',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/member/member.module').then(m => m.MemberPageModule)
  },
  {
    path: 'member/:username',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/member/member.module').then(m => m.MemberPageModule)
  },
  // more
  {
    path: 'more',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.MorePageModule),
  },
  // pages
  {
    path: 'posts',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/posts/posts.module').then(m => m.PostsPageModule),
  },
  {
    path: 'posts/category/:categoryId',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/posts/posts.module').then(m => m.PostsPageModule),
  },
  {
    path: 'post/:id',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/post/post.module').then(m => m.PostPageModule),
  },
  {
    path: 'articles',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/articles/articles.module').then(m => m.ArticlesPageModule),
  },
  {
    path: 'articles/category/:categoryId',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/articles/articles.module').then(m => m.ArticlesPageModule),
  },
  {
    path: 'article/:id',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/article/article.module').then(m => m.ArticlePageModule),
  },
  {
    path: 'videos',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/videos/videos.module').then(m => m.VideosPageModule),
  },
  {
    path: 'videos/category/:categoryId',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/videos/videos.module').then(m => m.VideosPageModule),
  },
  {
    path: 'video/:id',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('../../projects/church/src/lib/pages/video/video.module').then(m => m.VideoPageModule),
  },
  {
    path: 'about',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.AboutPageModule),
  },
  {
    path: 'help',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.HelpPageModule),
  },
  {
    path: 'terms',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.TermsPageModule),
  },
  {
    path: 'privacy',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.PrivacyPageModule),
  },
  // 404
  {
    path: '**',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
