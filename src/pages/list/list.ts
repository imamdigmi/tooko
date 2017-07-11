import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ModalController, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public akakomfirebase    : FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              private db : AngularFireDatabase, 
              private modalCtrl : ModalController,
              public actionSheetCtrl: ActionSheetController,
              private platform  : Platform) {


  }

  ionViewDidLoad()
   {
      this.platform.ready()
      .then(() =>
      {
         this.akakomfirebase = this.db.list('/infokampus');
      });
   }

    addRecord()
   {
      let modal = this.modalCtrl.create('Modalsinfo');
      modal.present();
   }

   editAkakomfirebase(akakomfirebase)
   {
      let params = { akakomfirebase: akakomfirebase, isEdited: true },
          modal  = this.modalCtrl.create('Modalsinfo', params);

      modal.present();
   }



   deleteAkakomfirebase(akakomfirebase : any)
   {
      this.akakomfirebase.remove(akakomfirebase);
   }


}
