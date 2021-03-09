import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { MyUserService } from '../my-user.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AdminAcceptRequestDialogComponent } from '../admin-accept-request-dialog/admin-accept-request-dialog.component';
import { AdminDeleteRequestDialogComponent } from '../admin-delete-request-dialog/admin-delete-request-dialog.component';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {

  public requestData:Register[];


  constructor(

    private userService:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
    
    this.getRequest();
    
  }

  getRequest(){

    this.userService.getApprovalRequest().subscribe(data=>{

      this.requestData=data;
    })
  }



  
  

  approveChallengerRequest(userData){
   


    this.dialog.open(AdminAcceptRequestDialogComponent);

    this.userService.approveChallengerRequest(userData).subscribe();




  }


  deleteChallengerRequest(userData){

    

    this.dialog.open(AdminDeleteRequestDialogComponent);

    this.userService.deleteChallengerRequest(userData).subscribe(
    );
  
      



  }






}
