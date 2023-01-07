import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanalimentacionpostPageRoutingModule } from './planalimentacionpost-routing.module';

import { PlanalimentacionpostPage } from './planalimentacionpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanalimentacionpostPageRoutingModule
  ],
  declarations: [PlanalimentacionpostPage]
})
export class PlanalimentacionpostPageModule {}
