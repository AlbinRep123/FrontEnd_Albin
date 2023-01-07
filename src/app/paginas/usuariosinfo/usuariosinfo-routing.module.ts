import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosinfoPage } from './usuariosinfo.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosinfoPageRoutingModule {}
