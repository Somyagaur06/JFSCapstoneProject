import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminSearchDialogComponent } from '../admin-search-dialog/admin-search-dialog.component';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';




@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  public result;
  constructor(
    private authenticateService :AuthenticateService,
    private router:Router,
    private dialog:MatDialog
    
    
  ) { }

  ngOnInit(): void {
  }


  logout(){
   
    
   
    this.authenticateService.logout();
    this.router.navigate(['login']);
    this.dialog.open(LogoutDialogComponent);
  }
    
      



    
   
   }
    
   
    
  

  
  

