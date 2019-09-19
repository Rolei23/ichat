import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {
  ref;
  task: any;
  uploadState: any;
  uploadProgress: any;
  downloadURL: any;
  // imageURL:string
  id;
  name;
  url
  user: AngularFirestoreDocument;
  sub;
  photoURL:any;

  constructor(public Storage: AngularFireStorage , private  af: AngularFireAuth, 
    private afs :AngularFirestore, public nav:NavController) {
  //  this.af.auth.currentUser.photoURL;
   this.name=af.auth.currentUser.displayName;
   this.user=afs.doc(`users/${this.af.auth.currentUser.uid}`)
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

  fileChanged(event){
    const files = event.target.files
    console.log(files);
    
  }

  profile(){
    this.nav.navigateForward('/uploader');  
  }
}

