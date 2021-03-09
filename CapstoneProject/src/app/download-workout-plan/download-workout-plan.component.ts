import { Component, OnInit } from '@angular/core';
import {saveAs} from "file-saver";
import { MyUserService } from '../my-user.service';
import { Users } from '../users';
import { MatDialog } from '@angular/material/dialog';
import { FileNotFoundComponent } from '../file-not-found/file-not-found.component';


@Component({
  selector: 'app-download-workout-plan',
  templateUrl: './download-workout-plan.component.html',
  styleUrls: ['./download-workout-plan.component.css']
})
export class DownloadWorkoutPlanComponent implements OnInit {

  public user=new Users('','','','','','','','','','');
  public result:boolean;



  constructor(

    private service:MyUserService,
    private diallog:MatDialog
  ) { }

  ngOnInit(): void {

this.user.username=sessionStorage.getItem('username');
this.user.batchName=sessionStorage.getItem('batchName');
this.user.batchGroup=sessionStorage.getItem('batchGroup');

    this.service.checkUser(this.user).subscribe(
      data=>{
        this.result=data;
      }
    )
  }






download(){


  if(this.result===true)
  {
  this.service.downloadFile().subscribe(
    data=>{
      console.log(data.type);
      let blob=new Blob([data.body], { type: 'docx' });
      const file = new File([blob],'file');
      saveAs(file);

});
  }

  else
  {
    this.diallog.open(FileNotFoundComponent,
      
      {

        height:'auto',
        width:'300px'
      });
    
  }

}
}