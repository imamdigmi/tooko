import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase)
  {
    this.news = db.list('/beritakampus');
  }


}
