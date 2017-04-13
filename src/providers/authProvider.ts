
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

import {DataProvider} from './dataProvider';

@Injectable()
export class AuthProvider {

    user: any;

    constructor(private af: AngularFire, private data: DataProvider, private platform: Platform) {
       
    }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        console.log('user id: ' + authData.uid);
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

}