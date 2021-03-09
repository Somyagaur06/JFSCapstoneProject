import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Users } from '../users';
import { MyUserService } from '../my-user.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-admin-edit-motivator',
  templateUrl: './admin-edit-motivator.component.html',
  styleUrls: ['./admin-edit-motivator.component.css']
})
export class AdminEditMotivatorComponent implements OnInit {

  public batches=[
    'January-March','April-June','July-September','October-December'
  ]




  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any,

    private userService :MyUserService,
    private dialog:MatDialog
    


  ) { }

  ngOnInit(): void {

    console.log('demo data'+ this.data);
  }



  modify(){

    if(this.data.batchName==='Below Bmi 25')
    this.data.batchGroup='NA';

    this.dialog.open(UpdateDialogComponent)
    this.userService.modifyMotivator(this.data).subscribe();
    
   
  }
}
