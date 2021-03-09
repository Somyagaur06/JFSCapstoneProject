import { Component, OnInit } from '@angular/core';
import { MyRoutingModule } from '../my-routing/my-routing.module';
import { MyUserService } from '../my-user.service';
import { Users } from '../users';
import { MatDialog } from '@angular/material/dialog';
import { AdminSearchDialogComponent } from '../admin-search-dialog/admin-search-dialog.component';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

public users:Users[]=new Array();

public flag=false;

public user:Users[]=new Array();

public searchValue:String;

public value:String;

public searchOptions=[
  
  'Username','Full Name','Batch Name','Batch Group'

];











  constructor(
    private userService:MyUserService,
    private dialog:MatDialog
  )
   { }

  ngOnInit(): void {

    this.getAllUsers();

  }



  getAllUsers(){

    this.userService.getAllUsers().subscribe(
      data=>{
        this.users=data;
        console.log(this.users);      }
    );
  }


  searchUsers(){

   console.log(this.value);

     if(this.searchValue==='Username')
     {
      for(let data of this.users)
      {

      if(data.username===this.value)
      this.user.push(data);
      }
      if(this.user.length!=0)
      this.flag=true;
      else
      this.dialog.open(AdminSearchDialogComponent);


     }
    


     if(this.searchValue==='Full Name')
     {
      
        for(let data of this.users)
        {
  

      if (data.name===this.value)
      this.user.push(data);

        }
        if(this.user.length!=0)
        this.flag=true;
        else
        this.dialog.open(AdminSearchDialogComponent);

     }



     if(this.searchValue==='Batch Name')
     {
        for(let data of this.users)
        {
  
      if (data.batchName===this.value && data.batchStatus==='Ongoing')
      this.user.push(data);
        }
        if(this.user.length!=0)
      this.flag=true;
      else
      this.dialog.open(AdminSearchDialogComponent);
     }


     if(this.searchValue==='Batch Group'){

        for(let data of this.users)
        {
  
      if (data.batchGroup===this.value && data.batchStatus==='Ongoing')
      this.user.push(data);
       }
       if(this.user.length!=0)
      this.flag=true;
      else
      this.dialog.open(AdminSearchDialogComponent);
      }
      
    
      
     }


doDefault(){
  this.flag=false;
  this.user=new Array();
}



     }
