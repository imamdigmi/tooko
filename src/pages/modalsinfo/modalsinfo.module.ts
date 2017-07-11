import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Modalsinfo } from './modalsinfo';

@NgModule({
  declarations: [
    Modalsinfo,
  ],
  imports: [
    IonicPageModule.forChild(Modalsinfo),
  ],
  exports: [
    Modalsinfo
  ]
})
export class ModalsinfoModule {}
