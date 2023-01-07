import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanentrenamientoeditPageRoutingModule } from './planentrenamientoedit-routing.module';

import { PlanentrenamientoeditPage } from './planentrenamientoedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanentrenamientoeditPageRoutingModule
  ],
  declarations: [PlanentrenamientoeditPage]
})
export class PlanentrenamientoeditPageModule {}
