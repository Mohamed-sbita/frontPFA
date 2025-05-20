import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-ajouterutilisateur',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.css']
})
export class AjouterutilisateurComponent implements OnInit {

  user: any = {
    email: '',
    password: '',
    nom: '',
    prenom: '',
    role: '',
    telephone: '',
    adresse: '',
    dateNaissance: '',
    sexe: '',}


    erroremail: string = '';
    errorpassword: string = '';
    errornom: string = '';
    errorprenom: string = '';
    errorrole: string = '';
    errortelephone: string = '';
    erroradresse: string = '';
    errordateNaissance: string = '';  
    errorsexe: string = '';
    emailinvalid: string = '';
    passwordinvalid: string = '';
  
  constructor(
   
  ) {}

  ngOnInit(): void {

  }


  adduser() {  
    if(this.user.nom==''){
      this.errornom = 'Nom is required';
    }
    else if (this.user.prenom==''){
      this.errorprenom = 'Prenom is required';
    } 
    else if(this.user.email==''){
      this.erroremail = 'Email is required';
    }
    else if(!this.validateEmailFormat(this.user.email)){
      this.emailinvalid = 'Email is invalid';
    }
    else if(this.user.password==''){  
      this.errorpassword = 'Password is required';
    }
    else if(this.user.role==''){
      this.errorrole = 'Role is required';
    }
    else if(this.user.telephone==''){
      this.errortelephone = 'Telephone is required';
    }
    else if(this.user.adresse==''){
      this.erroradresse = 'Adresse is required';
    }
    else if(this.user.dateNaissance==''){
      this.errordateNaissance = 'Date de Naissance is required';
    }
    else if(this.user.sexe==''){
      this.errorsexe = 'Sexe is required';
    }
    }




  


  reset() {
    this.erroremail = '';
    this.errorpassword = '';   
    this.errornom = '';
    this.errorprenom = '';
    this.errorrole = '';
    this.errortelephone = '';
    this.erroradresse = '';
    this.errordateNaissance = '';
    this.errorsexe = '';
    this.emailinvalid = '';
    this.passwordinvalid = '';
  }

  validateEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }



}