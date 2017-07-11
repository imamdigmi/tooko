import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-infokampus',
  templateUrl: 'infokampus.html'
})
export class InfokampusPage {

  infokampus: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) 
  {
    this.infokampus = db.list('/infokampus');
  }

}
