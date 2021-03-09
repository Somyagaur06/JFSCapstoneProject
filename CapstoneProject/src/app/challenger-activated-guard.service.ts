import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';



@Injectable({
  providedIn: 'root'
})
export class ChallengerActivatedGuardService implements CanActivate {

  constructor(
    private authenticateService:AuthenticateService,
    private router:Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if(this.authenticateService.isChallengerLoggedIn())

    return true;
  
    else
    {

    this.router.navigate(['']);
    }
    
}





}