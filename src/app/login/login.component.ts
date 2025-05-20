import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})



export class LoginComponent implements OnInit{

  user: any = {
    email: '',
    password: ''
  };
  erroremail: string = '';
  errorpassword: string = '';
  emailinvalid: string = '';
  
  
  constructor(
    private router: Router,
    private authentificationService: AuthentificationService
  
  ){

  }
  ngOnInit(): void {
   
  }
  login() {
    if(this.user.email==''){

      this.erroremail = 'Email is required';

    }
    else if(!this.validateEmailFormat(this.user.email)){
      this.emailinvalid = 'Email is invalid';
    }
    else if(this.user.password==''){
      this.errorpassword = 'Password is required';
    }



    
  }
  validateEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  reset(){
this.emailinvalid = '';
    this.erroremail = '';
    this.errorpassword = '';
  }
 
}
  




