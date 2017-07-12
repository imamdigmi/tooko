import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  info: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase)
  {
    this.info = db.list('/infokampus');
  }

}
