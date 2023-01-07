import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanentrenamientoPageRoutingModule } from './planentrenamiento-routing.module';

import { PlanentrenamientoPage } from './planentrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanentrenamientoPageRoutingModule
  ],
  declarations: [PlanentrenamientoPage]
})
export class PlanentrenamientoPageModule {}
