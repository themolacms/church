import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, OnlineGuard } from '@lamnhan/ngx-useful';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@molacms/church').then(m => m.HomePageModule),
  },
  // terms & privacy
  { path: 'terms', loadChildren: () => import('@molacms/church').then(m => m.TermsPageModule) },
  { path: 'privacy', loadChildren: () => import('@molacms/church').then(m => m.PrivacyPageModule) },
  // settings
  { path: 'setting', loadChildren: () => import('@molacms/church').then(m => m.SettingPageModule) },
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
    loadChildren: () => import('@molacms/church').then(m => m.MemberPageModule)
  },
  {
    path: 'member/:username/:route',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.MemberPageModule)
  },
  {
    path: 'member/:username',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.MemberPageModule)
  },
  // more
  {
    path: 'more',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.MorePageModule),
  },
  // pages
  { path: 'posts', loadChildren: () => import('@molacms/church').then(m => m.PostsPageModule) },
  { path: 'post', loadChildren: () => import('@molacms/church').then(m => m.PostPageModule) },
  { path: 'articles', loadChildren: () => import('@molacms/church').then(m => m.ArticlesPageModule) },
  { path: 'article', loadChildren: () => import('@molacms/church').then(m => m.ArticlePageModule) },
  { path: 'videos', loadChildren: () => import('../../projects/church/src/lib/pages/videos/videos.module').then(m => m.VideosPageModule) },
  { path: 'video', loadChildren: () => import('../../projects/church/src/lib/pages/video/video.module').then(m => m.VideoPageModule) },
  { path: 'about', loadChildren: () => import('@molacms/church').then(m => m.AboutPageModule) },
  { path: 'help', loadChildren: () => import('@molacms/church').then(m => m.HelpPageModule) },
  // 404
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
