import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioseditPageRoutingModule } from './usuariosedit-routing.module';

import { UsuarioseditPage } from './usuariosedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioseditPageRoutingModule
  ],
  declarations: [UsuarioseditPage]
})
export class UsuarioseditPageModule {}
