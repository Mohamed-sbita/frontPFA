import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  url="http://localhost:8080/liste/login";

  constructor(private httpClient:HttpClient) { }




  login(email: string, password: string) {
    return this.httpClient.post(this.url, { email, password });
  }
}


