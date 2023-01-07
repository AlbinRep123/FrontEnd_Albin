import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanentrenamientoinfoPageRoutingModule } from './planentrenamientoinfo-routing.module';

import { PlanentrenamientoinfoPage } from './planentrenamientoinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanentrenamientoinfoPageRoutingModule
  ],
  declarations: [PlanentrenamientoinfoPage]
})
export class PlanentrenamientoinfoPageModule {}
