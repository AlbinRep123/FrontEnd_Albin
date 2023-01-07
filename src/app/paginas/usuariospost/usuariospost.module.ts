import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariospostPageRoutingModule } from './usuariospost-routing.module';

import { UsuariospostPage } from './usuariospost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariospostPageRoutingModule
  ],
  declarations: [UsuariospostPage]
})
export class UsuariospostPageModule {}
