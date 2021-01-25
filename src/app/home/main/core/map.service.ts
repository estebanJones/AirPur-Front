import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'node_modules_/postcss/lib/list';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Polluant } from './polluant.model';
import { RelevePolluant } from './relevePolluant.model';
import { Station } from './station.model';

@Injectable({
    providedIn: 'root'
  })
  
export class MapService {
    constructor(private http: HttpClient) {

    }

   
    getAllStation() : Observable<Station[]>{
        return this.http.get<Station[]>(`${environment.baseUrl}${environment.getAllStations}`);  
    }

   getPolluantsByStation(idStation : number): Observable<RelevePolluant[]> {
        return this.http.get<RelevePolluant[]>(`${environment.baseUrl}${environment.getStation}/${idStation}`);
    }

    private subject = new Subject<RelevePolluant[]>();
    emit(releve: RelevePolluant[]) {
        this.subject.next(releve);
    }

    clear() {
        this.subject.next();
    }

    onPolluant() : Observable<RelevePolluant[]>{
        return this.subject.asObservable();
    }
}