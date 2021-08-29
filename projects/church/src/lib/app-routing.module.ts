import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@lamnhan/ngx-useful';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
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
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  // user
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  // 404
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
