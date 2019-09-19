import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {Storage} from '@ionic/storage';
// import { User } from '../User';
// import * as firebase  from'firebase';
// import { userInfo } from 'os';

// import {firebaseConfig} from './firebaseconfig';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // rootPage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    
  //     platform.ready().then(()=>{
  //       storage.get('user').then(val=>{
  //         this.newMethod(val);
  //         this.rootPage = val? 'HomePage' : 'MainPage'; 
  //       }).catch(err=>{
  //         this.rootPage = 'MainPage'
  //       });
  //       statusBar.styleDefault();
  //       splashScreen.hide();

  //     });

  //   this.initializeApp();
  // }

  // private newMethod(val: any) {
  //   // userInfo.set(val);
 }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
