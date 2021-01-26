
import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../../core/map.service';
import { MeteoIndicateur } from '../../core/meteoindicateur.model';
import { RelevePolluant } from '../../core/relevePolluant.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateComponent} from '../create/create.component';
import { HistoriqueComponent } from '../historique/historique.component';
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
    constructor(private mapService: MapService, public dialog: MatDialog) {
        
    }

    ngOnInit() {
      console.log("DEBUT INIT ", this.relevesPolluants.length)
      this.subscribeToPolluant();
      this.subscribeToMeteo();
      console.log("FIN INIT")
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

    openDialog() {
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