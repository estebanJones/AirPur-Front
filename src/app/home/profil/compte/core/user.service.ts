import{ environment } from '../../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {}
  
    login(_email: string, _password: string): Observable<any> {
      return this.httpClient.post(`${environment.base_url}acceuil/register`,
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