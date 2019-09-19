import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    authService: any;
    roomSubscription: any;
    messageSubscription: any;
    router: any;
    // text:string;
    // chatRef:any;
    // uid:string;
    constructor(private route: ActivatedRoute, private mainService: MainPage, private storage: Storage ) {
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

        
    }
    async logout() {
        await this.authService.logout();
        this.router.navigateByUrl('/home');
    }
    ngOnInit() {
    }
}
