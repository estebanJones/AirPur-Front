import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Utilisateur } from '../auth.domain';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) { }

  ngOnInit() {
  }

  connecter() {
    this.authSrv.connecter(this.utilisateur.email, this.utilisateur.motDePasse)
      .subscribe(
       
        // en cas de succès, redirection vers la page /d'acceuil
       col => {

          let roleUtilisateur = this.getRoles(col);

          localStorage.setItem("idUtilisateur", col.id.toString());
          localStorage.setItem("roleUtilisateur", roleUtilisateur);
         
         // this.router.navigate([`/${roleUtilisateur}/accueil`]);
             
      },
        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

  getRoles(utilisateur: Utilisateur) : string {
    return this.menuService.recupererRoleUtilisateur(utilisateur);
  }
}
