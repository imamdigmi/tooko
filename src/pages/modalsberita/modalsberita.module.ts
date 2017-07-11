import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Modalsberita } from './modalsberita';

@NgModule({
  declarations: [
    Modalsberita,
  ],
  imports: [
    IonicPageModule.forChild(Modalsberita),
  ],
  exports: [
    Modalsberita
  ]
})
export class ModalsberitaModule {}
