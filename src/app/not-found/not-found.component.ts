import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  users: any[] = [];
  constructor(
     private router: Router,
     private adminService: AdminService,
     
  ) { }

  ngOnInit(): void {

    this.getAllUsers();
  }

  tolist(){
    this.router.navigate(['/listeutilisateurs']);
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
