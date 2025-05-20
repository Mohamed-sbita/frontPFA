import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { AccueiladminComponent } from './accueiladmin/accueiladmin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeutilisateursComponent } from './listeutilisateurs/listeutilisateurs.component';

import { DatePipe } from '@angular/common';


import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';

import { AjouterutilisateurComponent } from './ajouterutilisateur/ajouterutilisateur.component';

import { NavbarComponent } from './accueiladmin/navbar/navbar.component';
import { SidebarComponent } from './accueiladmin/sidebar/sidebar.component';
import { UsernavbarComponent } from './accueil/usernavbar/usernavbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilComponent } from './profil/profil.component';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    AccueiladminComponent,
    ListeutilisateursComponent,
    UpdateutilisateurComponent,
    AjouterutilisateurComponent,
    NavbarComponent,
    SidebarComponent,
    UsernavbarComponent,
    ProfilComponent,
    NotFoundComponent

    /* NotFoundComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [
    DatePipe,
    // Ajoutez DatePipe aux fournisseurs ici
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
