import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AboutPage } from '../about/about';
import { VisimisiPage } from '../visimisi/visimisi';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = AboutPage;
  tab2Root: any = VisimisiPage;
  tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController, public http   : Http)
  {

  }

}
