import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrezedemaioPageRoutingModule } from './trezedemaio-routing.module';

import { TrezedemaioPage } from './trezedemaio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrezedemaioPageRoutingModule
  ],
  declarations: [TrezedemaioPage]
})
export class TrezedemaioPageModule {}
