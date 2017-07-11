import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pesen } from './pesen';

@NgModule({
  declarations: [
    Pesen,
  ],
  imports: [
    IonicPageModule.forChild(Pesen),
  ],
  exports: [
    Pesen
  ]
})
export class PesenModule {}
