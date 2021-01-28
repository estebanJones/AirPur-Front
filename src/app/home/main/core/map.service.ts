import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'node_modules_/postcss/lib/list';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MeteoIndicateur } from './meteoindicateur.model';
import { Polluant } from './polluant.model';
import { RelevePolluant } from './relevePolluant.model';
import { Station } from './station.model';
import { Commune } from './commune.model'
import { CommuneLight } from './communeLight.model';

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

    searchCommunes(nomCommune : any): Observable<CommuneLight[]> {
        return this.http.get<CommuneLight[]>(`${environment.baseUrl}${environment.getCommuneALike}/${nomCommune}`)
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