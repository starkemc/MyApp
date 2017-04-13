import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// Providers
import { DataProvider } from '../providers/dataProvider';
import { AuthProvider } from '../providers/authProvider';

  var firebaseConfig = {
    apiKey: "AIzaSyBFlFuPMLDpSO6th9tEKa8KV3dgbRlJ2BI",
    authDomain: "caeb.firebaseapp.com",
    databaseURL: "https://caeb.firebaseio.com",
    projectId: "project-7189315831590487755",
    storageBucket: "project-7189315831590487755.appspot.com",
    messagingSenderId: "843107787683"
  };

  const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider
  ]
})
export class AppModule {}
