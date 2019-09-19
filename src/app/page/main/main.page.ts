 import { Component, OnInit } from '@angular/core';
 import { AngularFireAuth } from '@angular/fire/auth';
 import { AngularFirestore } from '@angular/fire/firestore';

import { OnDestroy } from '@angular/core';
 import { async } from 'q';
// import { AuthService } from '../auth.service';




// @Component({
//   selector: 'app-main',
//   templateUrl: './main.page.html',
//   styleUrls: ['./main.page.scss'],
// })
//  export class MainPage implements OnInit, OnDestroy {
//   ngOnDestroy(): void {
//     throw new Error("Method not implemented.");
//   }
//   ngOnInit(): void {
//     throw new Error("Method not implemented.");
//   }

//   roomSubscription: any;
//   messageSubscription: any;
//   router: any;
// // text:string;
// chatRef:any;
// uid:string;

//  constructor( private authService: AuthService) {
//     this.uid=localStorage.getItem('userid');
//     this.chatRef = this.fs.collection('chats').valueChanges();
    
//    }
// send(){
//   if(this.text != ''){
    
//     this.fs.collection('chats').add({
//       Name: this.af.auth.currentUser.displayName,
//       Message: this.text,
//       UserID: this.af.auth.currentUser.uid,

//     });
//     this.text != '';
//   }
// }

// ngOnDestroy() {


//   if(this.roomSubscription){
//     this.roomSubscription.unsubscribe();
//   }
//   if(this.messageSubscription){
//     this.messageSubscription.unsubscribe();
//   }
// }
//  }
//  async logout(){
//   await this.authService.logout();
//   this.router.navigateByUrl('/login');
// }
//   ngOnInit() {
//   }


