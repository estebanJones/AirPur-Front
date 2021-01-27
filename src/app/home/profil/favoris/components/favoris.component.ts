import { Component, OnInit } from '@angular/core';
import { FavorisAffichage } from '../../compte/core/favoris.model';
import { FavorisService } from '../../compte/core/favoris.service';
@Component({
    selector: 'app-favoris',
    templateUrl: './favoris.component.html',
    styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
    favoris: FavorisAffichage[] = [];
    constructor(private favorisService: FavorisService) {

    }
    ngOnInit() { 
        const idUtilisateur :number = JSON.parse(localStorage.getItem("utilisateur")).id;
        this.favorisService.getFavoris(idUtilisateur).subscribe(
            favoris => {
                this.favoris = favoris
                console.log(this.favoris);
                console.log(this.favoris.length);
            },
            error => console.log(error)
        );
        
    }

    getReleves() {
        
    }

}