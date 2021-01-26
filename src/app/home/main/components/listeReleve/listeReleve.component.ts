import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../../core/map.service';
import { MeteoIndicateur } from '../../core/meteoindicateur.model';
import { RelevePolluant } from '../../core/relevePolluant.model';


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
    
    constructor(private mapService: MapService) {
        
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
}