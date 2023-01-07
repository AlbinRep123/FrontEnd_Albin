import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioseditPage } from './usuariosedit.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioseditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioseditPageRoutingModule {}
