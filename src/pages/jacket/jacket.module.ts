import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JacketPage } from './jakcet';

@NgModule({
  declarations: [
    JacketPage,
  ],
  imports: [
    IonicPageModule.forChild(JacketPage),
  ],
  exports: [
    JacketPage
  ]
})
export class JacketModule {}
