import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioinfoPageRoutingModule } from './ejercicioinfo-routing.module';

import { EjercicioinfoPage } from './ejercicioinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioinfoPageRoutingModule
  ],
  declarations: [EjercicioinfoPage]
})
export class EjercicioinfoPageModule {}
