import{ environment } from '../../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //SERVER_URL = "http://localhost:8080accueil/register";

    constructor(private httpClient: HttpClient) {}
  
    login(_email: string, _password: string): Observable<any> {
      return this.httpClient.post(`${environment.baseUrl}acceuil/auth`,
        {
          email: _email,
          password: _password,
        }
      ).pipe(tap(resultat => {
        localStorage.setItem('APP-USER', JSON.stringify(resultat))
      }));
    }
    // Methode pour Inscription
    register(_nom : string, _prenom : string, _username : string, _email: string, _password: string) : Observable<any> {
      return this.httpClient.post(`${environment.baseUrl}accueil/register`,
        { 
          nom : _nom,
          prenom : _prenom,
          username : _username,
          email: _email,
          password: _password,
        }
      ).pipe(tap(resultat => {
        localStorage.setItem('APP-USER', JSON.stringify(resultat))
      }));
    }

    // Methode pour modifier informations de compte
    update(_email: string, _password: string): Observable<any> {
<<<<<<< HEAD
      return this.httpClient.put(`${environment.base_url}acceuil/updateUtilisateur`,
=======
      return this.httpClient.put(`${environment.baseUrl}acceuil/register`,
>>>>>>> 4bfa26fe10c30d848755a27010ed8c7bd9ea3126
        {
          email: _email,
          password: _password
        }
      ).pipe(tap(resultat => {
        localStorage.setItem('APP-USER', JSON.stringify(resultat))
      }));
    }
    isUserConnected(): boolean {
      return !!localStorage.getItem('APP-USER');
    }
  
    logout(){
      localStorage.removeItem('APP-USER');
    }
  }