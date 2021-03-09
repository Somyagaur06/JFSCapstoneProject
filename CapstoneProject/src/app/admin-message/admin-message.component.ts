import { Component, OnInit } from '@angular/core';
import { MyUserService } from '../my-user.service';
import {AdminMessage} from '../admin-message';



@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {


  public messages:AdminMessage[]=new Array();
  constructor(

    private userService:MyUserService
  ) { }

  ngOnInit(): void {

    this.getAdminMessage();
  }



  getAdminMessage(){
    this.userService.getAllMessage().subscribe(
      message=>{

      
        

       for(let data of message)
       {


        if(sessionStorage.getItem('userRole')==='admin' && data.sentTo===sessionStorage.getItem('username'))
       
          this.messages.push(data);
        

      else{


        if((data.sentTo===sessionStorage.getItem('username') || data.sentTo===sessionStorage.getItem('batchName') || data.sentTo===sessionStorage.getItem('batchGroup')) && data.sentBy!=sessionStorage.getItem('username'))
        this.messages.push(data);
        
       }

      }

       console.log(this.messages);


   }
    );
  
  }
}
