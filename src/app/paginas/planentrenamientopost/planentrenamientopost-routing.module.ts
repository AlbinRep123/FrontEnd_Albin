import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanentrenamientopostPage } from './planentrenamientopost.page';

const routes: Routes = [
  {
    path: '',
    component: PlanentrenamientopostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanentrenamientopostPageRoutingModule {}
