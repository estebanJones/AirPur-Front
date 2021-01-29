import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FavorisAffichage } from '../../compte/core/favoris.model';
import { FavorisService } from '../../compte/core/favoris.service';

@Component({
    selector: 'app-favoris',
    templateUrl: './favoris.component.html',
    styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit, AfterViewInit  {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    // favoris: FavorisAffichage[] = [];

    dataSource: MatTableDataSource<FavorisAffichage> = new MatTableDataSource([]);

    displayedColumns: string[] = ['#', 'date', 'vitesseMoyVent', 'cumulPluie', 'tempatureSol'];
    
    constructor(private favorisService: FavorisService) {
        const idUtilisateur:number = JSON.parse(localStorage.getItem("utilisateur")).id;
        this.favorisService.getFavoris(idUtilisateur).subscribe(
            favorisServeur => {
                const favoris = favorisServeur;
                this.dataSource = new MatTableDataSource(favoris);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                console.log(this.dataSource);
            },
            error => console.log(error)
        );
    }
    
    ngOnInit() { 
        
    }

    ngAfterViewInit() {
        
    }

    console(el: any) {
        console.log(el);
    }
}