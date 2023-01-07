import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanentrenamientopostPageRoutingModule } from './planentrenamientopost-routing.module';

import { PlanentrenamientopostPage } from './planentrenamientopost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanentrenamientopostPageRoutingModule
  ],
  declarations: [PlanentrenamientopostPage]
})
export class PlanentrenamientopostPageModule {}
