import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@lamnhan/ngx-useful';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@molacms/church').then(m => m.HomePageModule),
  },
  // terms, privacy
  {
    path: 'terms',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixTermsPageModule),
    data: {
      i18n: true,
    }
  },
  {
    path: 'privacy',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixPrivacyPageModule),
    data: {
      i18n: true,
    }
  },
  // auth
  { path: 'login', loadChildren: () => import('@molacms/church').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('@molacms/church').then(m => m.RegisterPageModule) },
  // user
  {
    path: 'account',
    loadChildren: () => import('@molacms/church').then(m => m.AccountPageModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  // more
  { path: 'more', loadChildren: () => import('@molacms/church').then(m => m.MorePageModule) },
  // 404
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
