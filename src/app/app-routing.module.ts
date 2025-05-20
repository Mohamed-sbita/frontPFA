import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { AccueiladminComponent } from './accueiladmin/accueiladmin.component';

import { ListeutilisateursComponent } from './listeutilisateurs/listeutilisateurs.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';

import { AjouterutilisateurComponent } from './ajouterutilisateur/ajouterutilisateur.component';


import { ProfilComponent } from './profil/profil.component';
import { NotFoundComponent } from './not-found/not-found.component';

/*import { NotFoundComponent } from './not-found/not-found.component';*/



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'profile',component:ProfilComponent},
  {path:'login',component:LoginComponent},
  
  {path:'accueiladmin',component:AccueiladminComponent},
 
 
  {path: 'listeutilisateurs',component:ListeutilisateursComponent},
  {path: 'dashbord',component:NotFoundComponent},
  
 
  {path:'updateutilisateur/:id',component:UpdateutilisateurComponent},
  
  {path:'ajouterutilisateur',component:AjouterutilisateurComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, FormsModule,MatSnackBarModule
  ],
  exports: [RouterModule],
  
  bootstrap: [LoginComponent]
})
export class AppRoutingModule { }
