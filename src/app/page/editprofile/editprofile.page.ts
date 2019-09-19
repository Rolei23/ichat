import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
// @ViewChild('tabs') tabs: IonTabs

  editprofile: any;
  constructor(public nav:NavController) { }

  ngOnInit() {
    //  this.editprofile.select('feed')
        // console.log(this.files);
    
  }
  chats(){
    this.nav.navigateForward('/chats');  
   }
//   uploader(){
//   this.nav.navigateForward('/profile');  
// }

// feed(){
//   this.nav.navigateForward('/uploader'); 
// }
}

