import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosinfoPageRoutingModule } from './usuariosinfo-routing.module';

import { UsuariosinfoPage } from './usuariosinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosinfoPageRoutingModule
  ],
  declarations: [UsuariosinfoPage]
})
export class UsuariosinfoPageModule {}
