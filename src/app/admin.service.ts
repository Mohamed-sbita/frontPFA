import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL="http://localhost:8080/users/admin";


  constructor(private httpClient:HttpClient) { }

 getAllusers() {

  return this.httpClient.get(this.baseURL);

 }

 AddUser(){

 }
deleteUser(){

}
updateUser(){

}

updateProfile(){ 

 } 


}
