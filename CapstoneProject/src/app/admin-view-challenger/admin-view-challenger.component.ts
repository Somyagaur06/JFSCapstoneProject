import { Component, OnInit } from '@angular/core';
import { MyUserService } from '../my-user.service';
import { Users } from '../users';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditMotivatorComponent } from '../admin-edit-motivator/admin-edit-motivator.component';
import { AdminDeleteMotivatorDialogComponent } from '../admin-delete-motivator-dialog/admin-delete-motivator-dialog.component';
import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-admin-view-challenger',
  templateUrl: './admin-view-challenger.component.html',
  styleUrls: ['./admin-view-challenger.component.css']
})
export class AdminViewChallengerComponent implements OnInit {

public user:Users[]=new Array();



  constructor(


    private userService:MyUserService,

    private dialog:MatDialog
  ) { }

  ngOnInit(): void {


    this.userService.getAllUsers().subscribe(
    data=>{
    
      for(let users of data)
      {

        if(users.role==='challenger' && users.batchMonth==='July-Sept')

        this.user.push(users);
      }
 }


    );

console.log(this.user);




  }



  modifyChallenger(data){


    this.dialog.open(AdminEditMotivatorComponent,{

      height:'auto',
      width:'500px',
      data:data
    })
  }





  deleteChallenger(data){

    this.dialog.open(AdminDeleteMotivatorDialogComponent);
    this.userService.deleteMotivator(data).subscribe(
      data=>{
        location.reload()
      }
    );
    
  }

}
