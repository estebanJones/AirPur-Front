import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './home/profil/auth/core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'airpur';
   connected : boolean = false;
   inputSearch: string;

  constructor(private authServ : AuthService, private router : Router) {
      this.authServ.utilisateurConnecteObs.subscribe(
          utilisateurConnected => {
              if(!utilisateurConnected.estAnonyme()) {
                  this.connected = true;
              }
          },
          utilisateurNoConnected => {
              console.log(utilisateurNoConnected);
          }
      )
  }

  ngOnInit() {
    // Au lancement de l'application
    // check si l'utilisateur est en cache ou en bdd
    this.authServ.verifierAuthentification().subscribe();
  }

  onLogoutClick() {
    this.authServ.seDeconnecter();
    this.router.navigate(['']);
    this.connected = false;
  }

  
}
