import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { JacketPage } from '../pages/jacket/jacket';
import { ShirtPage } from '../pages/shirt/shirt';
import { BagPage } from '../pages/bag/bag';
import { AboutPage } from '../pages/about/about';
import { OrderPage } from '../pages/order/order';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    OrderPage,
    BagPage,
    JacketPage,
    ShirtPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    OrderPage,
    BagPage,
    JacketPage,
    ShirtPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
