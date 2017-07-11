import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  songs: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
   this.songs = db.list('/songs');
  }
 
}
