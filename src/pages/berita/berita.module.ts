import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeritaPage } from './berita';

@NgModule({
  declarations: [
    BeritaPage,
  ],
  imports: [
    IonicPageModule.forChild(BeritaPage),
  ],
  exports: [
    BeritaPage
  ]
})
export class BeritaModule {}
