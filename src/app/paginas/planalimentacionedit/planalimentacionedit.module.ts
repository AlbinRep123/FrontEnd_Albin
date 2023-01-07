import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanalimentacioneditPageRoutingModule } from './planalimentacionedit-routing.module';

import { PlanalimentacioneditPage } from './planalimentacionedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanalimentacioneditPageRoutingModule
  ],
  declarations: [PlanalimentacioneditPage]
})
export class PlanalimentacioneditPageModule {}
