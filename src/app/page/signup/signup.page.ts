import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {NavController} from "@ionic/angular";
import { FormGroup } from '@angular/forms';
import { firestore } from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:string;
  pwd:string;
 username:string;  
 validations_form: FormGroup;
 errorMessage: string = '';
 successMessage: string = '';
 validation_messages = {
  'email': [
    { type: 'required', message: 'Email is required.' },
    { type: 'pattern', message: 'Enter a valid email.' }
  ],
  'password': [
    { type: 'required', message: 'Password is required.' },
    { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  ],
  'username': [
   { type: 'required', message: 'Username is required.' },
   { type: 'minlength', message: 'Username must be at least 5 characters long.' }
 ]
};
  constructor(public fs:AngularFirestore,public af:AngularFireAuth,public nav:NavController) {

  }
  ngOnInit() {
  }

// goto_login(){
//   this.nav.navigateRoot('/home');
// }

signup(){
    this.af.auth.createUserWithEmailAndPassword(this.email,this.pwd).then(()=>{
     localStorage.setItem('userid',this.af.auth.currentUser.uid);
  
     this.fs.collection('users').doc(this.af.auth.currentUser.uid).set({
      displayName:this.username,
      uid: this.af.auth.currentUser.uid,
      Timestamp:firestore.FieldValue.serverTimestamp(),
      Email:this.email,
      photoURL:''
    }).catch(error=>{
      alert(error.message)
    })
  
      this.af.auth.currentUser.updateProfile({
        displayName:this.username,
        photoURL:''
      }).then(()=>{
        this.nav.navigateRoot('/main')
      }).catch(error=>{
        alert(error.message)
      })
    }).catch(error =>{
      alert(error.message)
  })
   } 
register(){
  this.nav.navigateRoot('/editprofile');
}

}
