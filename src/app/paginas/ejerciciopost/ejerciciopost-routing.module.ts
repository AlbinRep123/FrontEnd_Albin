import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjerciciopostPage } from './ejerciciopost.page';

const routes: Routes = [
  {
    path: '',
    component: EjerciciopostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjerciciopostPageRoutingModule {}
