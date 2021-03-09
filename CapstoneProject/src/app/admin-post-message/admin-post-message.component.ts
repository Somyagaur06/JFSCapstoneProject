import { Component, OnInit } from '@angular/core';
import { AdminMessage } from '../admin-message';
import { MyUserService } from '../my-user.service';
import {Users} from '../users';
import { MatDialog } from '@angular/material/dialog';
import { AdminMessagePostDialogComponent } from '../admin-message-post-dialog/admin-message-post-dialog.component';

@Component({
  selector: 'app-admin-post-message',
  templateUrl: './admin-post-message.component.html',
  styleUrls: ['./admin-post-message.component.css']
})
export class AdminPostMessageComponent implements OnInit {


  public message=new AdminMessage('','','','','');

  public postTo:String;

  public postOptions=[
    'Individual User','Batch Name','Batch Group'
  ];


  public users:Users[]=new Array();

  public userList:any[]=new Array();





  constructor(

    private userService:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {

this.userService.getAllUsers().subscribe(


  data=>{

    this.users=data;
 }
);
}




findUsers(){

this.userList=new Array();
this.message=new AdminMessage('','','','','');



for(let data of this.users)

  if(this.postTo==='Individual User')
  {

  if(sessionStorage.getItem('userRole')==='admin')
  {
    
  this.userList.push(data.username);
  }

  else{
    if(data.batchName===sessionStorage.getItem('batchName') && data.username!=sessionStorage.getItem('username') && data.batchStatus==='Ongoing'        || data.role==='admin'  )
    this.userList.push(data.username);

    }
  }
  


 
 if(this.postTo==='Batch Name')
 {

   this.userList.push('Above Bmi 25');
   this.userList.push('Below Bmi 25');


 }


 if(this.postTo==='Batch Group')
 {
   this.userList.push('Bangalore');
 this.userList.push('New Delhi');
 this.userList.push('Hyderabad');
 this.userList.push('Chennai');
 this.userList.push('Mumbai');
 }
 
  

   
  }



  sendMessage(){

  this.message.sentBy=sessionStorage.getItem('username');

  this.message.senderRole=sessionStorage.getItem('userRole');
  console.log(this.message);
  this.userService.postAdminMessage(this.message).subscribe(
    data=>{
      this.dialog.open(AdminMessagePostDialogComponent);
    }
  )
  }


}


    


    


  


