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
  {
    path: 'terms',
    data: {
      i18n: true,
    },
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixTermsPageModule),
  },
  {
    path: 'privacy',
    data: {
      i18n: true,
    },
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixPrivacyPageModule),
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
  // more
  {
    path: 'more',
    canLoad: [OnlineGuard],
    canActivate: [OnlineGuard],
    loadChildren: () => import('@molacms/church').then(m => m.MorePageModule),
  },
  // 404
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
