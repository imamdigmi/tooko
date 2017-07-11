import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { About } from './about';

@NgModule({
  declarations: [
    About,
  ],
  imports: [
    IonicPageModule.forChild(About),
  ],
  exports: [
    About
  ]
})
export class AboutModule {}
