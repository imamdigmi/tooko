import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-beritakampus',
  templateUrl: 'beritakampus.html'
})
export class BeritakampusPage {

  beritakampus: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) 
  {
    this.beritakampus = db.list('/beritakampus');
  }


}
