import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MeteoIndicateur } from './meteoindicateur.model';
import { RelevePolluant } from './relevePolluant.model';
import { Station } from './station.model';
import { Commune } from './commune.model'

@Injectable({
    providedIn: 'root'
  })

export class MapService {
    private polluantSubject = new Subject<RelevePolluant[]>();
    private meteoSubject = new Subject<MeteoIndicateur>();

    constructor(private http: HttpClient) {

    }

    getAllStation() : Observable<Station[]>{
        return this.http.get<Station[]>(`${environment.baseUrl}${environment.getAllStations}`);
    }
//    ----------------------------------         POLLUANT  ------------------------------------------------------------
   getPolluantsByStation(idStation : number): Observable<RelevePolluant[]> {
        return this.http.get<RelevePolluant[]>(`${environment.baseUrl}${environment.getStation}/${idStation}`);
    }

    getCommune(nomCommune :string): Observable<Commune> {
        return this.http.get<Commune>(`${environment.baseUrl}${environment.getCommune}/${nomCommune}`)
    }

    emitPolluant(releve: RelevePolluant[]) {
        this.polluantSubject.next(releve);
    }


    clearPolluant() {
        this.polluantSubject.next();
    }

    onPolluant() : Observable<RelevePolluant[]>{
        return this.polluantSubject.asObservable();
    }

    //    ----------------------------------         METEO     ------------------------------------------------------------

    getMeteoByCommune(idCommune : number) : Observable<MeteoIndicateur> {
        return this.http.get<MeteoIndicateur>(`${environment.baseUrl}${environment.getMeteo}/${idCommune}`);
    }

    emitMeteo(meteo: MeteoIndicateur) {
        this.meteoSubject.next(meteo);
    }

    onMeteo() : Observable<MeteoIndicateur>{
        return this.meteoSubject.asObservable();
    }

    clearMeteo() {
        this.meteoSubject.next();
    }

}
