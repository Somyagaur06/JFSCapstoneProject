import { Component, OnInit } from '@angular/core';
import {MonthlyLogs} from '../monthly-logs';
import { MyUserService } from '../my-user.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminSearchDialogComponent } from '../admin-search-dialog/admin-search-dialog.component';

import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-admin-challenger-monthly-logs',
  templateUrl: './admin-challenger-monthly-logs.component.html',
  styleUrls: ['./admin-challenger-monthly-logs.component.css']
})
export class AdminChallengerMonthlyLogsComponent implements OnInit {

public monthlyLogs:MonthlyLogs[]=new Array();

public logs:MonthlyLogs[]=new Array();

public month:String;


  constructor(

    private userService:MyUserService,

    private dialog:MatDialog



  ) { }

  ngOnInit(): void {

    this.userService.getMonthlyLogs().subscribe(data=>{

      if(sessionStorage.getItem('userRole')==='admin')
      this.logs=data;

      else
      {
     
        for(let user of data)
        {
         if(sessionStorage.getItem('batchGroup')!=null)
         {

        if(sessionStorage.getItem('batchName')===user.batchName && sessionStorage.getItem('batchGroup')===user.batchGroup)
        
        this.logs.push(user);
            }


            else
            {
              if(sessionStorage.getItem('batchName')===user.batchName)
              this.logs.push(user);
            }

            console.log(this.logs);

       }





  }




 });
  }



checkMonth(){


  for(let data of this.logs){

if(data.month===this.month)

this.monthlyLogs.push(data);


  }
console.log(this.monthlyLogs);

  if(this.monthlyLogs.length===0)
  this.dialog.open(AdminSearchDialogComponent);


}


defaultValues(){

  this.monthlyLogs=new Array();

}









}
