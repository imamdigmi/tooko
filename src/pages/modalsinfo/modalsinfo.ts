import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the Modals page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modalsinfo',
  templateUrl: 'modalsinfo.html',
})
export class Modalsinfo {
  public form          : any;
   public akakomfirebase         : FirebaseListObservable<any[]>;
   public akakomfirebaseName     : any     = '';
  // public akakomfirebaseGenres   : any     = [];
   public akakomfirebaseDuration : any     = '';
   public akakomfirebaseSummary  : any     = '';
  // public akakomfirebaseActors   : any     = [];
   public akakomfirebaseYear     : any     = '';
  // public akakomfirebaseRating   : any     = '';
   public akakomfirebaseId       : string  = '';
   public isEditable             : boolean = false;

  constructor(
      public navCtrl        : NavController,
      public params         : NavParams,
      private _FB 	        : FormBuilder,
      private _FIRE         : AngularFireDatabase,
      public viewCtrl       : ViewController) 
  {

        this.form 	    = _FB.group({
         'summary' 	    : ['', Validators.minLength(10)],
         'year' 	    : ['', Validators.maxLength(20)],
         'name'         : ['', Validators.required],
         'duration'	    : ['', Validators.required]
        // 'rating'	    : ['', Validators.required]
        // 'genres' 	    : ['', Validators.required],
        // 'actors' 	    : ['', Validators.required]
      });

      this.akakomfirebase = this._FIRE.list('/infokampus');


      if(params.get('isEdited'))
      {
          let akakomfirebase 		= params.get('akakomfirebase'),
              k;

          this.akakomfirebaseName        = akakomfirebase.title;
          this.akakomfirebaseDuration	   = akakomfirebase.duration;
          this.akakomfirebaseSummary     = akakomfirebase.summary;
         // this.akakomfirebaseRating   	 = akakomfirebase.rating;
          this.akakomfirebaseYear    	   = akakomfirebase.year;
          this.akakomfirebaseId          = akakomfirebase.$key;

/*
          for(k in akakomfirebase.genres)
          {
             this.akakomfirebaseGenres.push(akakomfirebase.genres[k].name);
          }


          for(k in akakomfirebase.actors)
          {
             this.akakomfirebaseActors.push(akakomfirebase.actors[k].name);
          }
*/
          this.isEditable      = true;
      }
  }

  saveAkakomfirebase(val)
   {
      let title	    : string	= this.form.controls["name"].value,
          summary   : string 	= this.form.controls["summary"].value,
         // rating    : number	= this.form.controls["rating"].value,
         // genres    : any       = this.form.controls["genres"].value,
         // actors    : any	    = this.form.controls["actors"].value,
          duration  : string	= this.form.controls["duration"].value,
          year      : string	= this.form.controls["year"].value,
          types     : any       = [],
  	      people    : any       = [],
  	      k         : any;

/*
    for(k in genres)
    {
       types.push({
          "name" : genres[k]
       });
    }


    for(k in actors)
    {
       people.push({
          "name" : actors[k]
       });
    }
*/

   if(this.isEditable)
   {
      this.akakomfirebase.update(this.akakomfirebaseId, {
         title    : title,
         summary  : summary,
       //  rating   : rating,
         duration : duration,
       //  genres   : types,
       //  actors   : people,
         year     : year
      });
   }
   else
   {
      this.akakomfirebase.push({
         title    : title,
         summary  : summary,
        // rating   : rating,
         duration : duration,
        // genres   : types,
        // actors   : people,
         year     : year
      });
   }

   this.closeModal();
   }



   closeModal()
   {
      this.viewCtrl.dismiss();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modals');
  }

}
