import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { MyUserService } from '../my-user.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../forgot-password-dialog/forgot-password-dialog.component';
import { AdminSearchDialogComponent } from '../admin-search-dialog/admin-search-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  

  public user=new Users('','','','','','','','','','');
  public users:Users[]=new Array();
  public flag:boolean=false;

  

  

  

  ngOnInit(){

    
    
  }



  constructor(

    private service:MyUserService,
    private dialog:MatDialog,
    private route:Router
  ){}






  changePassword(){
   
    this.service.changePassword(this.user).subscribe(


      data=>{
        if(data===true)
        this.dialog.open(ForgotPasswordDialogComponent)

        else

        this.dialog.open(AdminSearchDialogComponent);
      },

      error=>{
        this.dialog.open(AdminSearchDialogComponent);
      }
    )


     
    }
    


    cancel(){
      this.route.navigate(['login']);
    }
  }

  







