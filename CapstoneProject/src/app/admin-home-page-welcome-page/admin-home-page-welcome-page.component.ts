import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { AuthenticateService } from '../authenticate.service';
import { MyUserService } from '../my-user.service';
import { Batch } from '../batch';

@Component({
  selector: 'app-admin-home-page-welcome-page',
  templateUrl: './admin-home-page-welcome-page.component.html',
  styleUrls: ['./admin-home-page-welcome-page.component.css']
})
export class AdminHomePageWelcomePageComponent implements OnInit {

  public batch:Batch=new Batch('','','','');

  constructor(

    private  userService:MyUserService

  ) { }

 
  ngOnInit(): void {

    this.userService.getBatch().subscribe(data=>{
      this.batch=data;
    });

    

  }



  getRequest(){



  }

}
