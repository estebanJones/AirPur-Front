import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../../core/map.service';
import { RelevePolluant } from '../../core/relevePolluant.model';


@Component({
    selector: 'app-auth',
    templateUrl: './listeReleve.component.html',
    styleUrls: ['./listeReleve.component.scss']
  })
export class ListeRelevesComponent implements OnInit {
    relevesPolluants: RelevePolluant[] = [];
    displayedColumns: string[] = ['nom', 'valeur', 'dateDebut', 'dateFin'];
    columnsToDisplay: string[] = this.displayedColumns.slice();
    
    constructor(private mapService: MapService) {
        
    }

    ngOnInit() {
      this.mapService.onPolluant().subscribe(
        relevesPolluants => this.relevesPolluants = relevesPolluants,
        error => console.log("ntm ", error)
      )
      console.log("relevesPolluants ", this.relevesPolluants);
    }

}