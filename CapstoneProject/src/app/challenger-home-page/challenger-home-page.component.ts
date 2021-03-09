import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-challenger-home-page',
  templateUrl: './challenger-home-page.component.html',
  styleUrls: ['./challenger-home-page.component.css']
})
export class ChallengerHomePageComponent implements OnInit {

  constructor(

    private authenticateService:AuthenticateService,
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
