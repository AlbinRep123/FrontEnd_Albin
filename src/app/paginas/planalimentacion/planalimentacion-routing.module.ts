import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanalimentacionPage } from './planalimentacion.page';

const routes: Routes = [
  {
    path: '',
    component: PlanalimentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanalimentacionPageRoutingModule {}
