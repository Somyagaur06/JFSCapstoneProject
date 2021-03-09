import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders}    from '@angular/common/http';
import { Register } from './register';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyUserService {

  constructor(
    private http:HttpClient
  ) { }

//Registration for Challenger
  doRegistration(register){

   return this.http.post<Register>('http://localhost:8080/challengerRegistration',register);

 }



 //Fetching all pending request

 getApprovalRequest():Observable<Register[]>{

  

  return this.http.get<Register[]>('http://localhost:8080/getApprovalRequest');

  
 }
  

 approveChallengerRequest(userData){


  console.log(userData);
  return this.http.post<any>('http://localhost:8080/acceptChallengerRequest',userData);

 }



 deleteChallengerRequest(userData){

  return this.http.post<any>('http://localhost:8080/deleteChallengerRequest',userData);

 }

 
getAllMessage(){

  return this.http.get<any>('http://localhost:8080/getAllMessages');
}


getAllUsers(){

  return this.http.get<any>('http://localhost:8080/getAllUsers');



}

postAdminMessage(message){

  return this.http.post<any>('http://localhost:8080/postAdminMessage',message);
  
}


modifyMotivator(data)
{
  return this.http.post<any>('http://localhost:8080/modifyUser',data);

}


deleteMotivator(data){

  return this.http.post<any>('http://localhost:8080/deleteUser',data);

  
}

addMotivator(data){

  console.log(data);
  
  return this.http.post<any>('http://localhost:8080/addMotivator',data);
}




getDailyLogs(){

  return this.http.get<any>('http://localhost:8080/getDailyLogs');



}


getMonthlyLogs(){

  return this.http.get<any>('http://localhost:8080/getMonthlyLogs');



}


saveDailyLogs(data){

  return this.http.post<any>('http://localhost:8080/saveDailyLogs',data);


}


saveMonthlyLogs(data){

  return this.http.post<any>('http://localhost:8080/saveMonthlyLogs',data);


}

changePassword(data){

  return this.http.put<any>('http://localhost:8080/forgotPassword',data);

}




uploadTo(sentTo){

  return this.http.get<any>('http://localhost:8080/saveUser' + '/'+sentTo);
}



uploadFile(file){

  const fd=new FormData();

fd.append(

  'file',file,file.name
);

console.log(fd);
 return  this.http.post<any>('http://localhost:8080/uploadFile',fd);
}






downloadFile(){

  return  this.http.get<any>('http://localhost:8080/downloadFile',{responseType: 'blob' as 'json', observe: 'response' });


}


checkUser(user){

  console.log(user);
  return  this.http.post<any>('http://localhost:8080/checkUser' ,user);

  
}


addBatch(batch)
{
  return this.http.post<any>('http://localhost:8080/addBatch' ,batch);
}



getBatch(){

  return this.http.get<any>('http://localhost:8080/getBatch');
}

}
