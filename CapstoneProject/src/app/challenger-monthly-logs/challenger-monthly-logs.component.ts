import { Component, OnInit } from '@angular/core';
import { MonthlyLogs } from '../monthly-logs';
import { MyUserService } from '../my-user.service';
import { MatDialog } from '@angular/material/dialog';
import {UpdateDialogComponent} from '../update-dialog/update-dialog.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-challenger-monthly-logs',
  templateUrl: './challenger-monthly-logs.component.html',
  styleUrls: ['./challenger-monthly-logs.component.css']
})
export class ChallengerMonthlyLogsComponent implements OnInit {

public monthlyLogs:MonthlyLogs=new MonthlyLogs('','','',0,0,0,0,0,0,0,0,'','')






  constructor(

    private service:MyUserService,

    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }


  updateMonthlyLogs(){


    this.monthlyLogs.username=sessionStorage.getItem('username');
    this.monthlyLogs.batchGroup=sessionStorage.getItem('batchGroup');
    this.monthlyLogs.batchName=sessionStorage.getItem('batchName');

    if(this.monthlyLogs.batchGroup==='')
    this.monthlyLogs.batchGroup='NA';
    
this.dialog.open(UpdateDialogComponent);

this.service.saveMonthlyLogs(this.monthlyLogs).subscribe();

    
  }

  default(){
    location.reload();
  }
}
