import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanentrenamientoeditPage } from './planentrenamientoedit.page';

const routes: Routes = [
  {
    path: '',
    component: PlanentrenamientoeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanentrenamientoeditPageRoutingModule {}
