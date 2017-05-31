import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBGpDrJ-njFum4VUsz3yfwSt7cO4FiXbm4",
            authDomain: "tooko-ae1d2.firebaseapp.com",
            databaseURL: "https://tooko-ae1d2.firebaseio.com",
            projectId: "tooko-ae1d2",
            storageBucket: "tooko-ae1d2.appspot.com",
            messagingSenderId: "1008971579289"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                console.log("not login");
                this.rootPage = Login;
            } else {
                console.log("login");
                this.rootPage = HomePage;
            }
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
