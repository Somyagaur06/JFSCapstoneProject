import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';



@Injectable({
  providedIn: 'root'
})
export class AdminActivatedGuardService implements CanActivate {

  constructor(
    private authenticateService:AuthenticateService,
    private router:Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if(this.authenticateService.isAdminLoggedIn())

    return true;
  
    else
    {

    this.router.navigate(['']);
    }
    
}





}