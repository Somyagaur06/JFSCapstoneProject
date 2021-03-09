import { Component, OnInit } from '@angular/core';
import {ChallengerDailyLogs} from '../challenger-daily-logs'
import { MyUserService } from '../my-user.service';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { AdminSearchDialogComponent } from '../admin-search-dialog/admin-search-dialog.component';

@Component({
  selector: 'app-admin-challenger-daily-logs',
  templateUrl: './admin-challenger-daily-logs.component.html',
  styleUrls: ['./admin-challenger-daily-logs.component.css']
})
export class AdminChallengerDailyLogsComponent implements OnInit {

public dailyLogs:ChallengerDailyLogs[]=new Array();

public date:String;

public flag=false;



  constructor(

    private userService:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {

    
  }




  findLogs(){

    this.userService.getDailyLogs().subscribe(
      data=>{
 
        

        for( let user of data)
      
        {
       if(sessionStorage.getItem('userRole')==='admin' && user.date===this.date)
      
      { this.dailyLogs=data;
        this.flag=true;

      }


        else

        {


          if(sessionStorage.getItem('batchGroup')!=null)
           {
 
          if(sessionStorage.getItem('batchName')===user.batchName && sessionStorage.getItem('batchGroup')===user.batchGroup && user.date===this.date)
          
        {  this.dailyLogs.push(user);
          this.flag=true;

        }
              }

            


            else
            {
              if(sessionStorage.getItem('batchName')===user.batchName)
            {  this.dailyLogs.push(user);
              this.flag=true;

            }
            }


 }
}

 if(this.dailyLogs.length===0)
 this.dialog.open(AdminSearchDialogComponent);           
  }
    );
} 
        
    


defaultValues(){

  this.flag=false;
  this.dailyLogs=new Array();

}

}

  
