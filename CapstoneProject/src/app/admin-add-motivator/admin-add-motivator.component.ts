import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { MyUserService } from '../my-user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { AdminModifyMotivatorComponent } from '../admin-modify-motivator/admin-modify-motivator.component';

@Component({
  selector: 'app-admin-add-motivator',
  templateUrl: './admin-add-motivator.component.html',
  styleUrls: ['./admin-add-motivator.component.css']
})
export class AdminAddMotivatorComponent implements OnInit {

  public data:Users=new Users('','','','','','','','','','');

  public users:Users[]=new Array();

  public batches=[
    'January-March','April-June','July-September','October-December'
  ]
  
  constructor(
    private userService:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    


    this.userService.getAllUsers().subscribe(
      data=>{
        
    for(let user of data)
    {

      if(user.role==='challenger' && user.batchStatus==='Ended')
      this.users.push(user);
    }


      }
    )
  }


  addNew(){
    console.log(this.data);

    

    if(this.data.batchName==='Below Bmi 25')
    {
        
      this.data.batchGroup='NA';

    }



  this.userService.addMotivator(this.data).subscribe(
  data=>{
    
     this.dialog.open(UpdateDialogComponent);
  }
);

  }

}
