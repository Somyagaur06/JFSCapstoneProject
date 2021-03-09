import { Component, OnInit } from '@angular/core';

import { Register } from '../register';
import { AuthenticateService } from '../authenticate.service';
import { MyUserService } from '../my-user.service';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {


public batch=[

  'January-March','April-June','July-September','October-December'
]
public register= new Register('July-September','','','','','','','','','',0,0,0.0,'','','','','','pending','');

public defaultGender=true;

public defaultState=true;

public defaultRestriction=true;

public defaultDietery=true;

public defaultPregnancy=true;

  constructor(

private userService:MyUserService,

private dialog:MatDialog,
private router:Router

  ) { }

  ngOnInit() {
  }


  checkGender(){
      if(this.register.gender==='female')
  return true;

  else
  return false;

  
}


checkDefaultGender(gender){
  if(gender==='')
  this.defaultGender=true;
  else
  {
  this.defaultGender=false;
  
  }

}

checkDefaultState(state){

  if(state==='')
   this.defaultState=true;
    else
    this.defaultState=false;

}


checkDefaultDietery(dietery){
  if(dietery==='')
  this.defaultDietery=true;
  else
  this.defaultDietery=false;

}


checkRestriction(restriction){
  if(restriction==='')
  this.defaultRestriction=true;
  else
  this.defaultRestriction=false;

}


checkPregnancyField(value){
  if(value==='')
  this.defaultPregnancy=true;
  else
  this.defaultPregnancy=false;
}



doRegisteration(){
  console.log(this.register);

  let height=(this.register.height*this.register.height)/10000;
  this.register.bmi=(this.register.weight)/height;
  
  if(this.register.pregnancyStatus==='')
  {
    this.register.pregnancyStatus='NA';
  }
  
  if(this.register.referralCode==='')
  {
    this.register.referralCode='NA'
  }


  this.userService.doRegistration(this.register).subscribe(

    data=>{

      this.dialog.open(RegistrationSuccessDialogComponent);
      

    }
  );

}

goBack(){
  this.router.navigate(['']);

}

}


