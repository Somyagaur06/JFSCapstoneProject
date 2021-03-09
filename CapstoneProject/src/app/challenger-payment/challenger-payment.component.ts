import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationSuccessDialogComponent } from '../donation-success-dialog/donation-success-dialog.component';

@Component({
  selector: 'app-challenger-payment',
  templateUrl: './challenger-payment.component.html',
  styleUrls: ['./challenger-payment.component.css']
})
export class ChallengerPaymentComponent implements OnInit {

  public amount;
   public  message;

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }



  success(){

console.log(this.amount);
    if(this.amount==='0')
    this.message=true;
    else
{
    this.dialog.open(DonationSuccessDialogComponent);
}

  }


  default(){

    this.message=false;
  }
}
