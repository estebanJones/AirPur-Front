import { environment } from './../../../../../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Rubrique } from './rubrique.models';

@Injectable({
  providedIn: 'root'
})
export class RubriqueService {

  constructor(private httpClient: HttpClient) { }

  /** Récupération de rubriques - rubrique */
  // Methode pour avoir la liste des rubriques
  getRubriques(): Observable<Rubrique[]> {
    //Verifier si on a des données en cache
    const cachedData = this.getRubriquesFromCache();
    if (!!cachedData) {
      // Si oui, retourner les données en cache
      return of(cachedData);
    } else {
      // sinon, faire la requete http et mettre en cache les données
      return this.httpClient.get<Rubrique[]>(`${environment.baseUrl}accueil/rubriques`)
    }

  }
  // Methode pour avoir la liste de message (posts)
  getUnRubrique(): Observable<Rubrique[]> {
    // To do aprés
    const id : number = 9;
    //Verifier si on a des données en cache
    const cachedData = this.getUnRubriqueFromCache();
    if (!!cachedData) {
      // Si oui, retourner les données en cache
      return of(cachedData);
    } else {
      // sinon, faire la requete http et mettre en cache les données
      return this.httpClient.get<Rubrique[]>(`${environment.baseUrl}accueil/rubriques/${id}`)
    }

  }



  // Methode pour recupérer les données en cache
  private getRubriquesFromCache(): Rubrique[] {
    const result = localStorage.getItem('APP-FORUM');
    return !!result ? <Rubrique[]>JSON.parse(result) : null
  }

  // Methode pour recupérer les données en cache
  private getUnRubriqueFromCache(): Rubrique[] {
    const result = localStorage.getItem('APP-FORUM');
    return !!result ? <Rubrique[]>JSON.parse(result) : null
  }

  /** Ajout et Modification de rubriques - rubrique */

  //Methode pour Ajouter un rubrique
  postRubriques(_content: string, _postedOn: Date, _title: string, _description: string): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}accueil/rubriques`,
      {
        content: _content,
        postedOn: _postedOn,
        title: _title,
        description: _description
      }
    ).pipe(tap(resultat => {
      localStorage.setItem('APP-USER', JSON.stringify(resultat))
    }));
  }


}
