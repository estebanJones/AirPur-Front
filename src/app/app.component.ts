import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './home/profil/auth/core/auth.service';
import { MapService } from './home/main/core/map.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'airpur';
  connected : boolean = false;
  
  searchedCommune: FormControl = new FormControl();
  filteredCommunes : any;
  isLoading = false;
  errorMsg: string;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;




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
      debounceTime(1000),
      tap(() => {
        this.errorMsg = "";
        this.filteredCommunes = [];
        this.isLoading = true;
      }),
      //switchMap(value => this.http.get("http://www.omdbapi.com/?apikey=[YOUR_KEY_HERE]=" + value)
      switchMap(value => this.mapServ.searchCommunes(value) 
      .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
      console.log(data);
      if (data == undefined) {
        this.errorMsg = data['Error'];
        this.filteredCommunes = [];
      } else {
        this.errorMsg = "";
        this.filteredCommunes = data;
      }

      console.log(this.filteredCommunes);
    });

  }

  onLogoutClick() {
    this.authServ.seDeconnecter();
    this.router.navigate(['']);
    this.connected = false;
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
}
