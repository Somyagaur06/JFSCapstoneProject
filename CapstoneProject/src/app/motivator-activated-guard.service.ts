import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class MotivatorActivatedGuardService implements CanActivate {

  constructor(
    private authenticateService:AuthenticateService
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.authenticateService.isMotivatorLoggedIn())

    return true;

    else
    return false;



  }








}
