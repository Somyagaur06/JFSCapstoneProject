import { Component, OnInit } from '@angular/core';
import { MyUserService } from '../my-user.service';
import { Users } from '../users';
import { utf8Encode } from '@angular/compiler/src/util';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditMotivatorComponent } from '../admin-edit-motivator/admin-edit-motivator.component';
import { AdminDeleteMotivatorDialogComponent } from '../admin-delete-motivator-dialog/admin-delete-motivator-dialog.component';
import { AdminAddMotivatorComponent } from '../admin-add-motivator/admin-add-motivator.component';

@Component({
  selector: 'app-admin-modify-motivator',
  templateUrl: './admin-modify-motivator.component.html',
  styleUrls: ['./admin-modify-motivator.component.css']
})
export class AdminModifyMotivatorComponent implements OnInit {

public user:Users[]=new Array();


  constructor(

    private userSevice:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {

    this.getUsers();
  }



  getUsers(){
    this.userSevice.getAllUsers().subscribe(data=>{

      for(let users of data)
      {
        if(users.role==='motivator')
        this.user.push(users);
      }

      console.log(this.user);




      
    });
  }





  modifyMotivator(data){

    this.dialog.open(AdminEditMotivatorComponent,{
      height:'auto',
      width:'500px',
      data:data
      
    });
    this.user=new Array();
    this.getUsers();
    
  }


  deleteMotivator(data){
   

    this.userSevice.deleteMotivator(data).subscribe(data=>{
      this.dialog.open(AdminDeleteMotivatorDialogComponent);

      this.user=new Array();
      this.getUsers();

    });
  }



    


addMotivator(){
this.dialog.open(AdminAddMotivatorComponent,{
    height:'auto',
    width:'500px'});

    
    

  
  
}

}
