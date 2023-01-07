import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioinfoPage } from './ejercicioinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioinfoPageRoutingModule {}
