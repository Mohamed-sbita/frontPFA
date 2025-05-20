import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.component.html',
  styleUrls: ['./accueiladmin.component.css']
})
export class AccueiladminComponent implements OnInit {

  adminId!: number;

  constructor(private panneauxService: AdminService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vérifiez d'abord si l'ID de l'administrateur est un paramètre de la route actuelle
    this.adminId = this.route.snapshot.params['adminId'];
    if (!this.adminId || isNaN(this.adminId)) {
      // Si l'ID de l'administrateur n'est pas un paramètre de la route actuelle, essayez de le récupérer à partir d'une route parente
      this.route.parent?.params.subscribe(params => {
        this.adminId = +params['adminId'];
        if (!this.adminId || isNaN(this.adminId)) {
          console.error('ID de l\'admin invalide.');
          return;
        }
      });
    }
  }

  getAdmin(id: number): void {
    console.log(id);
    this.router.navigate(['listeutilisateurs', id]);
  }
}
