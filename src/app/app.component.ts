import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './home/profil/auth/core/auth.service';
import { MapService } from './home/main/core/map.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { debounceTime, tap, switchMap, finalize, filter } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { CommuneInsee } from './home/main/core/CommuneInsee.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'airpur';
  connected : boolean = false;
  
  //SearchBar
  searchedCommune: FormControl = new FormControl();
  filteredCommunes : any;
  isLoading = false;
  errorMsg: string;
  communeSelected : CommuneInsee;


  constructor(private authServ : AuthService, private router : Router, private mapServ : MapService, private http: HttpClient) {
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

    this.searchedCommune.valueChanges
    .pipe(
      debounceTime(200),
      tap(val => {
        this.errorMsg = "";
        this.filteredCommunes = [];
        this.isLoading = true;
        //console.log(typeof val);
        if ( typeof val == "object" ){
          console.log("L'user a fait son choix !", val);
          this.chercherInfoGeoCommuneChoisie(val["codeInseeCommune"]);
        }
      }),

      filter( value => {
        return typeof value == "string"
      } // Retourne uniquement les valeurs qui sont des chaines de caractères. Quand l'user tape, value = string, quand il a choisi, value = commune object
      ), // Quand c'est string ca passe, quand c'est objet ca passe pas
      
      switchMap(value => this.mapServ.searchCommunes(value) 
      .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
     // console.log(data);
      if (data == undefined) {
        this.errorMsg = data['Error'];
        this.filteredCommunes = [];
      } else {
        this.errorMsg = "";
        this.filteredCommunes = data;
      }

      //console.log(this.filteredCommunes);
    });

  }

  onLogoutClick() {
    this.authServ.seDeconnecter();
    this.router.navigate(['']);
    this.connected = false;
  }

  /**
   * Fonction qui permet de remplir le champs choixsi on click dans l'input
   */
  displayFn(subject) {
    return subject ? subject.nomCommune : undefined;
  }
 
  /**
   * Va chercher les coordonées Géo de la commune selectionée par l'USER et les envois au composant MAP pour centrer la caméra dessus
   */
 chercherInfoGeoCommuneChoisie(codeInsee: string) {
  this.mapServ.getCoordGeoCommunesByCodeInsee(codeInsee)
    .subscribe( communeInsee => {console.log(communeInsee.centre);
                                  this.communeSelected = communeInsee;
                                  this.publierCommuneSelected(communeInsee);
      }
  );
 }

 /**
  * Publie la communeInsee recu dans le service pour la transmettre à la map
  */
 publierCommuneSelected(communeSelected : CommuneInsee){
   console.log("IN PUBLI", communeSelected )
   //this.mapServ.changerCommuneSelected(communeSelected);
   this.mapServ.communeSearchedSubj.next(communeSelected);
 } /// Pourquoi cela ne recoit rien en face ? Il ne publie pas ? Ou bien Map n'écoute pas ?
  
}
