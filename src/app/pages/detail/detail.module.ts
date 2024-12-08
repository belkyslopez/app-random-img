import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPage } from './detail.page';

import { Tab3PageRoutingModule } from './detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
