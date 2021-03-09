import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from '../users';
import { AuthenticateService } from '../authenticate.service';
import { PasswordIncorrectDialogComponent } from '../password-incorrect-dialog/password-incorrect-dialog.component';
import { MatCardModule,MatCard } from '@angular/material/card';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {


public user=new Users('','','','','','','','','','');

public conPassword:String;

public invalid=false;








  constructor(
    private dialog:MatDialog,
    private authenticateService:AuthenticateService
  ) { }

  ngOnInit(): void {
  }



  checkPassword(){

    if(this.user.password!=this.conPassword)
    {
     this.invalid=true;
       }


       else{

        this.user.username=sessionStorage.getItem('username');
        this.authenticateService.changePassword(this.user).subscribe(
          data=>{
            this.dialog.open(PasswordIncorrectDialogComponent);
          }
        );

       }
  }


  default(){
    this.invalid=false;
  }
}
