import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/authProvider';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  error: any;
  form: any;

  constructor(public navCtrl: NavController, private auth: AuthProvider,  private loadingCtrl: LoadingController) {
    
    this.form = {
      email: '',
      password: ''
    }

    let test = '132';
  }

  login()
  {
     let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

     this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });


  }

}
