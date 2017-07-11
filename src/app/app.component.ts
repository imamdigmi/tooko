import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BeritakampusPage } from '../pages/beritakampus/beritakampus';
import { InfokampusPage } from '../pages/infokampus/infokampus';
import { AkakomlinkPage } from '../pages/akakomlink/akakomlink';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'ios-home' },
      { title: 'Berita Kampus', component: BeritakampusPage, icon:'ios-paper' },
      { title: 'Info Kampus', component: InfokampusPage, icon:'md-list-box' },
      { title: 'Akakom Profile', component: TabsPage, icon:'md-contact' },
      { title: 'Tautan', component: AkakomlinkPage, icon:'md-link' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      setTimeout(() => {
        this.splashScreen.hide();
        }, 100);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
