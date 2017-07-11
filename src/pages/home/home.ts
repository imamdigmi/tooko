import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {BeritakampusPage} from '../beritakampus/beritakampus';
import {InfokampusPage} from '../infokampus/infokampus';
import {AkakomlinkPage} from '../akakomlink/akakomlink';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  infohome: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.infohome = db.list('/infohome');
  }

  showBeritakampusPage() {
    this.navCtrl.push(BeritakampusPage);
  }

    showInfokampusPage() {
    this.navCtrl.push(InfokampusPage);
  }

    showAkakomlinkPage() {
    this.navCtrl.push(AkakomlinkPage);
  }

  slides = [
    {
      image: "assets/slide/a.jpg"
    },
    {
      image: "assets/slide/b.jpg"
    },
    {
      image: "assets/slide/c.jpg"
    },
    {
      image: "assets/slide/d.jpg"
    },
    {
      image: "assets/slide/e.jpg"
    },
    {
      image: "assets/slide/f.jpg"
    },
    {
      image: "assets/slide/g.jpg"
    },
    {
      image: "assets/slide/h.jpg"
    },
    {
      image: "assets/slide/i.jpg"
    },
    {
      image: "assets/slide/j.jpg"
    },
    {
      image: "assets/slide/k.jpg"
    },
    {
      image: "assets/slide/l.jpg"
    }
  ];

  

}
