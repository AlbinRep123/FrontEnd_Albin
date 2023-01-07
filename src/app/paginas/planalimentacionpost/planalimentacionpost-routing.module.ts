import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanalimentacionpostPage } from './planalimentacionpost.page';

const routes: Routes = [
  {
    path: '',
    component: PlanalimentacionpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanalimentacionpostPageRoutingModule {}
