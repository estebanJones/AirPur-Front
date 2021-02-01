
import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../../core/map.service';
import { MeteoIndicateur } from '../../core/meteoindicateur.model';
import { RelevePolluant } from '../../core/relevePolluant.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateComponent} from '../create/create.component';
import { HistoriqueComponent } from '../historique/historique.component';
import { AuthService } from 'src/app/home/profil/auth/core/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './listeReleve.component.html',
    styleUrls: ['./listeReleve.component.scss']
  })
export class ListeRelevesComponent implements OnInit {
    relevesPolluants: RelevePolluant[] = [];
    relevesMeteo: MeteoIndicateur;
    displayedColumns: string[] = ['nom', 'valeur', 'dateDebut', 'dateFin'];
    columnsToDisplay: string[] = this.displayedColumns.slice();
    name: string;
    connected : boolean;
    


    constructor(private mapService: MapService, public dialog: MatDialog, public authServ: AuthService) {
        
    }

    ngOnInit() {
      this.subscribeToPolluant();
      this.subscribeToMeteo();

      this.authServ.utilisateurConnecteObs.subscribe(
        utilisateurConnected => {
          console.log("ICIIIII ", utilisateurConnected)
            if(!utilisateurConnected.estAnonyme()) {
              console.log("IL N EST PAS ANONYME ", utilisateurConnected)
                this.connected = true;
            }
        },
        utilisateurNoConnected => {
            console.log(utilisateurNoConnected);
        }
    )
    }

    subscribeToPolluant() {
      this.mapService.onPolluant().subscribe(
        relevesPolluants => this.relevesPolluants = relevesPolluants,
        error => console.log("erreur ", error)
      )
    }

    subscribeToMeteo() {
      this.mapService.onMeteo().subscribe(
        relevesMeteo => this.relevesMeteo = new MeteoIndicateur(relevesMeteo),
        error => console.log("erreur ", error)
      )
    }

    openFavoris() {
      const dialogRef = this.dialog.open(CreateComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openHistorique() {
      const dialogRef = this.dialog.open(HistoriqueComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  
}