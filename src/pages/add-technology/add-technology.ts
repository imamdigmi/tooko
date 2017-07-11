import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-add-technology',
  templateUrl: 'add-technology.html'
})
export class AddTechnology {

   // Define FormBuilder /model properties
   public form                   : FormGroup;
   public tecNamapemesan         : any;
   public tecNamamenu   	     : any;
   public tecJenis         		 : any;
   public tecHarga         		 : any;
   public tecJumlah         	 : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://localhost/resto/";

   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController)
   {

      // Create form builder validation rules
      this.form = fb.group({
         "nama_pemesan"           : ["", Validators.required],
    		 "nama_menu"              : ["", Validators.required],
    		 "jenis"                  : ["", Validators.required],
    		 "harga"                  : ["", Validators.required],
    		 "jumlah"                 : ["", Validators.required]
      });
   }



   // Determine whether we adding or editing a record
   // based on any supplied navigation parameters
   ionViewWillEnter()
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Edit Pesanan';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Tambah Pesanan';
      }
   }



   // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
      this.tecNamapemesan   = item.nama_pemesan;
      this.tecNamamenu 		= item.nama_menu;
	  this.tecJenis        	= item.jenis;
	  this.tecHarga        	= item.harga;
	  this.tecJumlah        = item.jumlah;
      this.recordID         = item.id;
   }



   // Save a new record that has been added to the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of create followed by the key/value pairs
   // for the record data
   createEntry(namapemesan, namamenu, jenis, harga, jumlah)
   {
      let body     : string   = "key=create&nama_pemesan=" + namapemesan + "&nama_menu=" + namamenu + "&jenis=" + jenis + "&harga=" + harga + "&jumlah=" + jumlah,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "manage-data.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification('Selamat pemesanan telah berhasi ditambahkan!');
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Kesalahan!');
         }
      });
   }


   // Update an existing record that has been edited in the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of update followed by the key/value pairs
   // for the record data
   updateEntry(namapemesan, namamenu, jenis, harga, jumlah)
   {
      let body       : string = "key=update&nama_pemesan=" + namapemesan + "&nama_menu=" + namamenu + "&jenis=" + jenis + "&harga=" + harga + "&jumlah=" + jumlah + "&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "manage-data.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification('Selamat data pemesanan telah berhasil diperbaruhi!');
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Kesalahan!');
         }
      });
   }



   // Remove an existing record that has been selected in the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of delete followed by the key/value pairs
   // for the record ID we want to remove from the remote database
   deleteEntry()
   {
      let name       : string = this.form.controls["nama_pemesan"].value,
          body       : string    = "key=delete&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any    = new Headers({ 'Content-Type': type}),
          options    : any    = new RequestOptions({ headers: headers }),
          url        : any    = this.baseURI + "manage-data.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm     = true;
            this.sendNotification('Data pemesanan telah berhasil dihapus!');
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Kesalahan!');
         }
      });
   }



   // Handle data submitted from the page's HTML form
   // Determine whether we are adding a new record or amending an
   // existing record
   saveEntry()
   {
      let namapemesan   : string = this.form.controls["nama_pemesan"].value,
	      namamenu    	: string = this.form.controls["nama_menu"].value,
	      jenis         : string = this.form.controls["jenis"].value,
	      harga         : string = this.form.controls["harga"].value,
	      jumlah        : string = this.form.controls["jumlah"].value;

      if(this.isEdited)
      {
         this.updateEntry(namapemesan, namamenu, jenis, harga, jumlah);
      }
      else
      {
         this.createEntry(namapemesan, namamenu, jenis, harga, jumlah);
      }
   }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
	  this.tecNamapemesan   = "";
      this.tecNamamenu 		= "";
	  this.tecJenis        	= "";
	  this.tecHarga        	= "";
	  this.tecJumlah        = "";
   }



   // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }

}
