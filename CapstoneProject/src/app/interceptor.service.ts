import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest , HttpHandler} from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {


  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler){
    
    
    if(sessionStorage.getItem('username') && sessionStorage.getItem('jsonToken')){
      console.log(sessionStorage.getItem('jsonToken'));
 
      req=req.clone({
        setHeaders:{
          
          Authorization: sessionStorage.getItem('jsonToken')
        }
      })
    }
 
   return next.handle(req);
 
 
   }








}
