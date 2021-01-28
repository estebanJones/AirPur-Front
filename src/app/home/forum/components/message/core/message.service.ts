import { environment } from '/Users/moussa/AirPur-Front/src/environments/environment';
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

    // Methode pour recupérer les données en cache
    private getMessagesFromCache(): Message[] {
        const result = localStorage.getItem('APP-FORUM');
        return !!result ? <Message[]>JSON.parse(result) : null;
    }


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
