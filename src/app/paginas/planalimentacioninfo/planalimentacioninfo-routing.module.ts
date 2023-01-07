import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanalimentacioninfoPage } from './planalimentacioninfo.page';

const routes: Routes = [
  {
    path: '',
    component: PlanalimentacioninfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanalimentacioninfoPageRoutingModule {}
