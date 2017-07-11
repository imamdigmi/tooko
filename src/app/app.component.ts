import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { OrderPage } from '../pages/order/order';
import { BagPage } from '../pages/bag/bag';
import { ShirtPage } from '../pages/shirt/shirt';
import { JacketPage } from '../pages/jacket/jacket';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  go_to_home(Page){
    this.nav.setRoot(HomePage);
  }

  go_to_about(){
    this.nav.setRoot(AboutPage);
  }

  go_to_order(){
    this.nav.setRoot(OrderPage);
  }

  go_to_bag(){
    this.nav.setRoot(BagPage);
  }

  go_to_jaket(){
    this.nav.setRoot(JacketPage);
  }

  go_to_shirt(){
    this.nav.setRoot(ShirtPage);
  }
}
