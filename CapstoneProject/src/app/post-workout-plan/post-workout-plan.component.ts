import { Component, OnInit } from '@angular/core';
import { AdminMessage } from '../admin-message';
import { MyUserService } from '../my-user.service';
import {Users} from '../users';
import { MatDialog } from '@angular/material/dialog';
import { AdminMessagePostDialogComponent } from '../admin-message-post-dialog/admin-message-post-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PosteduccessfllyComponent } from '../posteduccessflly/posteduccessflly.component';



@Component({
  selector: 'app-post-workout-plan',
  templateUrl: './post-workout-plan.component.html',
  styleUrls: ['./post-workout-plan.component.css']
})
export class PostWorkoutPlanComponent implements OnInit {



  public postOptions=[
    'Individual User','Batch Name','Batch Group'
  ];


  public users:Users[]=new Array();

  public userList:any[]=new Array();
  
  public selectedFile;

  public sentTo:String;

  public postTo:String;

  
  





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




for(let data of this.users)

  if(this.postTo==='Individual User')
  {

  if(sessionStorage.getItem('userRole')==='admin')
  {
    
  this.userList.push(data.username);
  }

  else{
    if(data.batchName===sessionStorage.getItem('batchName') && data.username!=sessionStorage.getItem('username') && data.batchStatus==='Ongoing'  )
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


  fileUpload(event){

    console.log(event);
      this.selectedFile=event.target.files[0];
    
    }



  sendFile(){

   this.dialog.open(PosteduccessfllyComponent);
  this.userService.uploadFile(this.selectedFile).subscribe(

    data=>{
      this.userService.uploadTo(this.sentTo).subscribe();

    }
  );

  

}


    


    


  
}




