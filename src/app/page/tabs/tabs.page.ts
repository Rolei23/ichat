import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  ref;
  task: any;
  uploadState: any;
  uploadProgress: any;
  downloadURL: any;
  id;
  name;
  url
  user: AngularFirestoreDocument;
  sub;
  photoURL:any;
  constructor(public Storage: AngularFireStorage , private  af: AngularFireAuth, private afs :AngularFirestore) {
   this.af.auth.currentUser.photoURL;
   this.name=af.auth.currentUser.displayName;
   this.user=afs.doc('users/${this.af.auth.currentUser.uid}')
   this.sub=this.user.valueChanges().subscribe(event=>{
   this.photoURL = event.photoURL
   })
  }
   ngOnInit() {
 }
  upload(event) {
   const file= event.target.files[0];
    this.id = Math.random().toString(36).substring(2);
   const filepath=this.id;
   this.ref = this.Storage.ref(filepath);
   const task = this.Storage.upload(filepath, file);
   this.uploadState = task.percentageChanges();
   task.snapshotChanges().pipe(
     finalize(() => {
       this.downloadURL = this.ref.getDownloadURL().subscribe(url=>{
         console.log(url);
         this.af.auth.currentUser.updateProfile({
           photoURL: url
         })
         this.user.update({
           photoURL: url
         })
       })
     })
   ).subscribe();
  }

  }
  
