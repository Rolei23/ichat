import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-buddychat',
  templateUrl: './buddychat.page.html',
  styleUrls: ['./buddychat.page.scss'],
})
export class BuddychatPage implements OnInit {
  currentUser: any;
  GENERAL_ROOM_ID: any;
  buddychat: any;
  buddyMessage: string;
  roomId: any;

   

    constructor() {
                  
     
    }
    onsendMessage() {
      this.buddychat.sendMessage({ text: this.buddyMessage , roomId: this.roomId}).then((messageId) => {
        this.buddyMessage = "";
      });
    }
  
    sendMessage(message) {
      if(message.attachment){
        return this.currentUser.sendMessage({
          text: message.text,
          attachment: { file: message.attachment, name: message.attachment.name },
          roomId: message.roomId || this.GENERAL_ROOM_ID
        });
      }
      else
      {
        return this.currentUser.sendMessage({
          text: message.text,
          roomId: message.roomId || this.GENERAL_ROOM_ID
        });
      }
    }

  ngOnInit() {
  }

}
