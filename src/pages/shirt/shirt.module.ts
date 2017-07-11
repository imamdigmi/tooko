import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShirtPage } from './shirt';

@NgModule({
  declarations: [
    ShirtPage,
  ],
  imports: [
    IonicPageModule.forChild(ShirtPage),
  ],
  exports: [
    ShirtPage
  ]
})
export class ShirtModule {}
