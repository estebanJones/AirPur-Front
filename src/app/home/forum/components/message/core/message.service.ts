import { environment } from './../../../../../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Message } from './message.models';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private httpClient: HttpClient) { }
    // Methode pour avoir la liste des rubriques
    getMessages(): Observable<Message[]> {
        //Verifier si on a des données en cache
        const cachedData = this.getMessagesFromCache();
        if (!!cachedData) {
            // Si oui, retourner les données en cache
            return of(cachedData);
        }
        else {
            // sinon, faire la requete http et mettre en cache les données
            return this.httpClient.get<Message[]>(`${environment.baseUrl}accueil/messages`);
        }
    }
     //Methode pour avoir la liste des message par rubrique
  getMessageByRubrique(rubriqueId : number) : Observable<Message[]> {
    return this.httpClient.get<[Message]>(`${environment.baseUrl}accueil/messages/${rubriqueId}`)

  } 

    // Methode pour recupérer les données en cache
    private getMessagesFromCache(): Message[] {
        const result = localStorage.getItem('APP-FORUM');
        return !!result ? <Message[]>JSON.parse(result) : null;
    }

    // getMessageByRubrique(rubriqueId : number) : Observable<Message[]> {
    //     const cachedData = this.getMessagesFromCache();
    //     if (!!cachedData) {
    //         // Si oui, retourner les données en cache
    //         return of(cachedData);
    //     }
    //     else {
    //         // sinon, faire la requete http et mettre en cache les données
    //         return this.httpClient.get<Message[]>(`${environment.baseUrl}accueil/messages`);
    //     }

    // }
    ///accueil/messages/1
    /** Ajout et Modification de rubriques - rubrique */

    //Methode pour Ajouter un rubrique
    postMessage(_content: string, _postedOn: Date): Observable<any> {

        return this.httpClient.post(`${environment.baseUrl}accueil/messages`,
            {
                content: _content,
                postedOn: _postedOn,
              
            }
        ).pipe(tap(resultat => {
            localStorage.setItem('APP-USER', JSON.stringify(resultat))
        }));
    }
}
