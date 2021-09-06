import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPage } from './setting.component';

const routes: Routes = [{ path: '', component: SettingPage }];

/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
