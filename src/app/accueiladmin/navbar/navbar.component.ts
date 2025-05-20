import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private _admin : AdminService , private router: Router){}


  deconnexion(){
    
  }

}
