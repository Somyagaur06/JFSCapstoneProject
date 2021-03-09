import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http:HttpClient
  ) { }




//Checking-Credentials and Logging-In-User

LoginUser(username,password){

  return this.http.post<any>('http://localhost:8080/login',{username,password},{observe:'response'}).pipe(

  map(
    userData=>{
      sessionStorage.setItem('username',username);
      
      sessionStorage.setItem('jsonToken',userData.headers.get('authorization'));
      console.log(userData);
      console.log(sessionStorage.getItem('username'));
      console.log(sessionStorage.getItem('jsonToken'));

      
    }
      )
    )  
  
  

}



//Fetching User-Role
getUserRole(username){

 return this.http.get<any>('http://localhost:8080/getUserRole' + "/" +username).pipe(

  map(
    userData=>{

      sessionStorage.setItem('userRole',userData.role);
console.log(userData.role);
      return userData;

    }
))

  }


  //Checking for Admin Login

isAdminLoggedIn(){

  
if(sessionStorage.getItem('username') && sessionStorage.getItem('userRole')==='admin')

 return true;
  else
 return false;

}

//Checking for Motivator Login
isMotivatorLoggedIn(){

  if(sessionStorage.getItem('username') && sessionStorage.getItem('userRole')==='motivator')

  return true;
  else
 return false;


}


isChallengerLoggedIn()
{
  if(sessionStorage.getItem('username') && sessionStorage.getItem('userRole')==='challenger')

  return true;
  else
 return false;

}



changePassword(user){

  return this.http.post<any>('http://localhost:8080/changePassword',user);
}





logout(){

  sessionStorage.removeItem('username');
  sessionStorage.removeItem('userRole');
  sessionStorage.removeItem('batchName');
  sessionStorage.removeItem('batchGroup');
}





}







  


