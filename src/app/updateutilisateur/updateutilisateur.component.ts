import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.css']
})
export class UpdateutilisateurComponent implements OnInit {
 

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  validateEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
}

