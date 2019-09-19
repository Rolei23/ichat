import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorage, AngularFireStorageModule}  from '@angular/fire/storage';
import { EditprofilePage } from './page/editprofile/editprofile.page';




const firebaseConfig = {
  apiKey: "AIzaSyCPy7Qikd7U54bQ2sYJ71RO4g_AXqLLfzs",
  authDomain: "ichat-b7bf1.firebaseapp.com",
  databaseURL: "https://ichat-b7bf1.firebaseio.com",
  projectId: "ichat-b7bf1",
  storageBucket: "ichat-b7bf1.appspot.com",
  messagingSenderId: "466222052041",
  appId: "1:466222052041:web:bbe409147de7f6c7bf1318"
}

@NgModule({
  declarations: [AppComponent,EditprofilePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireStorageModule, AppRoutingModule,AngularFirestoreModule, 
    AngularFireModule. initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
