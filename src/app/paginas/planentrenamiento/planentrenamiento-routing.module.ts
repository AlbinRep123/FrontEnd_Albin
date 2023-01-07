import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanentrenamientoPage } from './planentrenamiento.page';

const routes: Routes = [
  {
    path: '',
    component: PlanentrenamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanentrenamientoPageRoutingModule {}
