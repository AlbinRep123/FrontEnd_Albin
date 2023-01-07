import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanentrenamientoinfoPage } from './planentrenamientoinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PlanentrenamientoinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanentrenamientoinfoPageRoutingModule {}
