import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { InfoPage } from '../pages/info/info';
import { LinkPage } from '../pages/link/link';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { VisimisiPage } from '../pages/visimisi/visimisi';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyA4bgjrSQn83HVmwhZrmVKn1hBSycVWnyU",
    authDomain: "akakomfirebase.firebaseapp.com",
    databaseURL: "https://akakomfirebase.firebaseio.com",
    projectId: "akakomfirebase",
    storageBucket: "akakomfirebase.appspot.com",
    messagingSenderId: "156476598172"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    InfoPage,
    LinkPage,
    AboutPage,
    TabsPage,
    VisimisiPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    InfoPage,
    LinkPage,
    AboutPage,
    TabsPage,
    VisimisiPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
