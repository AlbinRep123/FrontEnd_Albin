import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariospostPage } from './usuariospost.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariospostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariospostPageRoutingModule {}
