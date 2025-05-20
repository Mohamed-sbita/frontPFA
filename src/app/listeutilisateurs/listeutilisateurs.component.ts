import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listeutilisateurs',
  templateUrl: './listeutilisateurs.component.html',
  styleUrls: ['./listeutilisateurs.component.css']
})
export class ListeutilisateursComponent implements OnInit {
    users: any[] = [];

  constructor(

    private router: Router,
    private adminService: AdminService,
    
    
   
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    
    
    
  }
  
getAllUsers() {
    this.adminService.getAllusers().subscribe(
      (response: any) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  } 
  
 

}
