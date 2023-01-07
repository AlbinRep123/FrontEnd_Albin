import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanalimentacioninfoPageRoutingModule } from './planalimentacioninfo-routing.module';

import { PlanalimentacioninfoPage } from './planalimentacioninfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanalimentacioninfoPageRoutingModule
  ],
  declarations: [PlanalimentacioninfoPage]
})
export class PlanalimentacioninfoPageModule {}
