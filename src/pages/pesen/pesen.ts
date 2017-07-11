import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-pesen',
  templateUrl: 'pesen.html',
})
export class Pesen {

  public items : any = [];
  constructor(public navCtrl: NavController, 
   			  public navParams: NavParams,
   			  public http   : Http) 
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pesen');
  }

     ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://localhost/resto/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push('AddTechnology');
   }

   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter,
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('AddTechnology', param);
   }

}
