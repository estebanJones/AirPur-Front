import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../profil/auth/core/auth.service';
import { MapService } from '../core/map.service';
import { Station } from "../core/station.model";
@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
  })

export class MapComponent implements OnInit {
    markers : any[] = [];
    stations : Station[] = [];
    connected : boolean = false;
    latitude = 51.678418;
    longitude = 7.809007;
    center: google.maps.LatLngLiteral;



    constructor(private authServ : AuthService, private mapService: MapService) {
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
        this.addMarker().subscribe(
            markersOn => {
                this.stations.forEach(station => {
                    this.markers.push({
                        position: {
                            lat: station.latitude,
                            lng: station.longitude,
                        },
                        label: {
                            color: 'red',
                            text: `Nom station : ${station.nom} ${this.markers.length + 1}`,
                        },
                        title: 'Station pollution ' + (this.markers.length + 1),
                        options: { animation: google.maps.Animation.BOUNCE },
                    })
                })
                console.log("Markers initilialisés");
            },
            error => console.log(error)
        );
    }

     click(event: google.maps.MapMouseEvent) {
        console.log(event)
    }

  addMarker() : Observable<Station[]>{
      //recuperer chaque station
      //pour chaque station ajouter un marker sur la map
    return this.mapService.getAllStation().pipe(
        map(stationServeur => {
            stationServeur.forEach(station => {
                this.stations.push(new Station(station));
            })
            console.log("ici ", this.stations);
            return this.stations;
        }),
    )
  }
}