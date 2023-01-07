import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjerciciopostPageRoutingModule } from './ejerciciopost-routing.module';

import { EjerciciopostPage } from './ejerciciopost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciciopostPageRoutingModule
  ],
  declarations: [EjerciciopostPage]
})
export class EjerciciopostPageModule {}
