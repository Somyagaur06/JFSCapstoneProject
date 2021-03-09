import { Component, OnInit } from '@angular/core';
import { ChallengerDailyLogs } from '../challenger-daily-logs';
import { MyUserService } from '../my-user.service';
import {UpdateDialogComponent} from '../update-dialog/update-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-challenger-daily-logs',
  templateUrl: './challenger-daily-logs.component.html',
  styleUrls: ['./challenger-daily-logs.component.css']
})
export class ChallengerDailyLogsComponent implements OnInit {


  public dailyLogs:ChallengerDailyLogs=new ChallengerDailyLogs('','','','','','','','','','','','');



  constructor(

    private service:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }




addDailyLogs(){

  this.dailyLogs.username=sessionStorage.getItem('username');
  this.dailyLogs.batchName=sessionStorage.getItem('batchName')
  this.dailyLogs.batchGroup=sessionStorage.getItem('batchGroup');

if(this.dailyLogs.batchGroup==='')
this.dailyLogs.batchGroup='NA';


this.dialog.open(UpdateDialogComponent);
this.service.saveDailyLogs(this.dailyLogs).subscribe();
}




default(){
  location.reload();
}
}