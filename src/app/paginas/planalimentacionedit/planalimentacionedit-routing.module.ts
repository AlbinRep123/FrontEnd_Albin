import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanalimentacioneditPage } from './planalimentacionedit.page';

const routes: Routes = [
  {
    path: '',
    component: PlanalimentacioneditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanalimentacioneditPageRoutingModule {}
