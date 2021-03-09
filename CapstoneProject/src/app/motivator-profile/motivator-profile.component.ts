import { Component, OnInit } from '@angular/core';
import { MyUserService } from '../my-user.service';
import {Users} from '../users';
import {UpdateDialogComponent} from '../update-dialog/update-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-motivator-profile',
  templateUrl: './motivator-profile.component.html',
  styleUrls: ['./motivator-profile.component.css']
})
export class MotivatorProfileComponent implements OnInit {


  public user:Users;
  constructor(


    private userService:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(

      data=>{
        
        for(let users of data)
        if(users.username===sessionStorage.getItem('username'))
        this.user=users;
}

    )
    
  }





  updateProfile(){

this.userService.modifyMotivator(this.user).subscribe(
  data=>{
    this.dialog.open(UpdateDialogComponent);
  }
);

  }

}
