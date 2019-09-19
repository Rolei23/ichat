import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  currentUser: any;
  getbuddymessages() {
    throw new Error("Method not implemented.");
  }
  buddymessages: any[];
  buddy: any;
  addnewmessage(newmessage: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private firestore: AngularFirestore,private angularFireStore:AngularFirestore, private afAuth : AngularFireAuth,private router:Router,private reactiveFormsModule:ReactiveFormsModule) { }
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
   logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
  userDetailsAnon(){
    return firebase.auth().currentUser;
  }
 

  getCurrentRoomId(otherUserId){
    let returnObs = new BehaviorSubject(null);
    let userRooms: Array<any> = this.currentUser.rooms;
    const userId = this.currentUser.id;
    let name = `${userId}-${otherUserId}`;
    let altName = `${otherUserId}-${userId}`;

    let roomExists = userRooms.findIndex((room) =>{
      if(room['name'] === name || room['name'] === altName)
      {
        return true;
      }
      return false;

    });    
    if(roomExists !== -1) {
      returnObs.next(userRooms[roomExists].id)
      return returnObs;
    }
    this.currentUser.createRoom({
      name,
      private: true,
      addUserIds: [otherUserId]
    }).then(room => {
      returnObs.next(room.id);
    })
    .catch(err => {
      console.log(`Error creating room ${err}`)
    })
    return returnObs;
  }


  async connectToRoom(roomId){
    console.log("Subscribe to room: ", roomId);
    let messageSubject = new ReplaySubject();
    await this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          console.log("Got message: ", message);
          messageSubject.next(message);
        }        
      },
      messageLimit: 20
    }).then(currentRoom => {
      console.log("Subscribed to room: ", roomId);
    }); 

    return messageSubject;
  }


}
 