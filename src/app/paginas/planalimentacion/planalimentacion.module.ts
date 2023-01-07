import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanalimentacionPageRoutingModule } from './planalimentacion-routing.module';

import { PlanalimentacionPage } from './planalimentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanalimentacionPageRoutingModule
  ],
  declarations: [PlanalimentacionPage]
})
export class PlanalimentacionPageModule {}
