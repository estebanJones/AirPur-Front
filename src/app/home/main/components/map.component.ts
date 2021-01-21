import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../profil/auth/core/auth.service';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
  })

export class MapComponent implements OnInit {
    connected : boolean = false;
    latitude = 51.678418;
    longitude = 7.809007;
    constructor(private authServ : AuthService) {
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

    }
}