import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-kontak',
  templateUrl: 'kontak.html'
})
export class KontakPage {

  constructor(public navCtrl: NavController, public http   : Http) 
  {

  }

}