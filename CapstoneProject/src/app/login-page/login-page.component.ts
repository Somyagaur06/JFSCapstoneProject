import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


 public loginData=new Login('','');

 public invalidCredentials=false;

 


  constructor(
    private authenticateService:AuthenticateService,
    private route:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }


  loginUser(){

    (
      this.authenticateService.LoginUser(this.loginData.username,this.loginData.password).subscribe(

        userData=>{

          (
            this.authenticateService.getUserRole(this.loginData.username).subscribe(

              user=>{

             if(user.role==='admin')
           {  this.route.navigate(['adminHomePage']);

              }

             
               if(user.role==='motivator' && user.userStatus==='active')
               {
               this.route.navigate(['motivatorHomePage']);
               }
               else
               this.invalidCredentials=true;
               

             if(user.role==='challenger'&& user.userStatus==='active')
             {
             this.route.navigate(['challengerHomePage']);
             }
             else
             this.invalidCredentials=true;
              }
            ))}
        
          ,
              error=>{
                this.invalidCredentials=true;

              }
              
            )
          )


  }

  defaultValue(){
    this.invalidCredentials=false;
  }


goBack(){

  this.route.navigate(['']);
}


forgotPassword(){

  this.dialog.open(ForgotPasswordComponent,
  {
    height:'auto',
    width:'500px'
  });

}







}