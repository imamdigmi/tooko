import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Modals } from './modals';

@NgModule({
  declarations: [
    Modals,
  ],
  imports: [
    IonicPageModule.forChild(Modals),
  ],
  exports: [
    Modals
  ]
})
export class ModalsModule {}


