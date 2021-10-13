import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaRegistroPageRoutingModule } from './edita-registro-routing.module';

import { EditaRegistroPage } from './edita-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaRegistroPageRoutingModule
  ],
  declarations: [EditaRegistroPage]
})
export class EditaRegistroPageModule {}
