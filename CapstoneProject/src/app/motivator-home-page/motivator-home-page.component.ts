import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-motivator-home-page',
  templateUrl: './motivator-home-page.component.html',
  styleUrls: ['./motivator-home-page.component.css']
})
export class MotivatorHomePageComponent implements OnInit {

  constructor(

    private service:AuthenticateService,
    private route:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }


  logout(){



    this.service.logout();

    this.route.navigate(['login']);
this.dialog.open(LogoutDialogComponent);
    


  }

}
