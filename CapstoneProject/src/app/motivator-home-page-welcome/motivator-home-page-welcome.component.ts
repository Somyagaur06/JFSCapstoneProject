import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { UserChangePasswordComponent } from '../user-change-password/user-change-password.component';
import { Users } from '../users';
import { MyUserService } from '../my-user.service';
import { Batch } from '../batch';

@Component({
  selector: 'app-motivator-home-page-welcome',
  templateUrl: './motivator-home-page-welcome.component.html',
  styleUrls: ['./motivator-home-page-welcome.component.css']
})
export class MotivatorHomePageWelcomeComponent implements OnInit {

public user:Users;

public batch:Batch;



  constructor(

    private userService:MyUserService
  ) { }

  ngOnInit(): void {









    this.userService.getAllUsers().subscribe(
      data=>{


        for(let users of data)
        {

          if(users.username===sessionStorage.getItem('username'))
     {   
      this.user=users;
    
      sessionStorage.setItem('batchName',users.batchName);
      sessionStorage.setItem('batchGroup',users.batchGroup);
console.log(this.user);

this.userService.getBatch().subscribe(data=>{
  this.batch=data;
})

     }
      }

      }
    )




  }

}
