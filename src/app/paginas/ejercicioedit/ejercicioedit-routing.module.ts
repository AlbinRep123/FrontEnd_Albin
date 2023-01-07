import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioeditPage } from './ejercicioedit.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioeditPageRoutingModule {}
