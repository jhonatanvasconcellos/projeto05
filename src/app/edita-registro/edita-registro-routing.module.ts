import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaRegistroPage } from './edita-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EditaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaRegistroPageRoutingModule {}
