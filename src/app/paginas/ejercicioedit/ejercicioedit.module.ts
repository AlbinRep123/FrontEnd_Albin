import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioeditPageRoutingModule } from './ejercicioedit-routing.module';

import { EjercicioeditPage } from './ejercicioedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioeditPageRoutingModule
  ],
  declarations: [EjercicioeditPage]
})
export class EjercicioeditPageModule {}
