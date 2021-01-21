import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Utilisateur } from '../auth.domain';

/**
 * Collègue anonyme.
 *
 */
const UTILISATEUR_ANONYME = new Utilisateur({});

/**
 * Service de gestion de l'authentification.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Flux du collègue connecté. Les abonnés sont notifiés dès qu'une connexion ou une déconnexion a lieu.
   *
   * A l'initialisation, le collègue connecté vaut 'undefined'.
   *
   */
  private utilisateurConnecteSub: BehaviorSubject<Utilisateur> = new BehaviorSubject(UTILISATEUR_ANONYME);

  constructor(private http: HttpClient) {
  }

  /**
   * Interface Observable du collègue connecté.
   *
   */
  get utilisateurConnecteObs(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.asObservable();
  }

  /**
   * Service permettant de vérifier si un collegue est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer le collègue connecté s'il n'est pas en cache.
   *
   */
//   verifierAuthentification(): Observable<Utilisateur> {
//     return this.collegueConnecteSub.getValue().estAnonyme() ?
//             this.http.get<Utilisateur>(`${environment.baseUrl}${environment.apiAuthMe}`, {withCredentials: true})
//                   .pipe(
                    
//                     map(colServeur => new Utilisateur(colServeur)),
//                     tap(col => this.collegueConnecteSub.next(col)),
//                     catchError(err => of(UTILISATEUR_ANONYME))
//                   ) :     of(this.collegueConnecteSub.getValue());
//   }

  /**
   * Connexion de l'utilisateur.
   *
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   *
   */
  connecter(email: string, mdp: string): Observable<Utilisateur> {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post("http://localhost:8080/login",
      new HttpParams().set('username', email).set('password', mdp), config)
      .pipe(
        map(utilisateurServeur => new Utilisateur(utilisateurServeur)),
        tap(u => this.utilisateurConnecteSub.next(u) )
      );
  }

  /**
   * Déconnexion de l'utilisateur.
   *
   * Le serveur provoque la suppression du cookie AUTH-TOKEN.
   *
   */
  seDeconnecter() {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    localStorage.removeItem("idUtilisateur");
    localStorage.removeItem("roleUtilisateur");

    return this.http.post<Utilisateur>("http://localhost:8080/logout", null , config)
      .pipe(
        tap(user => this.utilisateurConnecteSub.next(UTILISATEUR_ANONYME))
      );
  }


  isAuthenticated() {

    if ( localStorage.getItem("idUtilisateur") != null ){
      return true;
    } else {
      return false
    }
    
}

}