import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Utilisateur } from 'src/app/home/profil/auth/core/auth.domain';
import { Favoris } from '../../core/favoris.model';
import { MapService } from '../../core/map.service';
@Component({
    selector: 'app-auth',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
  })
  export class CreateComponent implements OnInit {
    options: FormGroup;
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');
    favoris: Favoris = new Favoris();

    // DATEPICKER
    range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
    constructor(fb: FormBuilder, private mapService: MapService) {
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
    }

    ngOnInit() {
      this.mapService.onPolluant();
    }

    validFavoris() {
      // const utilisateurId = JSON.parse( localStorage.getItem('utilisateur')).id;
      console.log("commune ", localStorage.getItem("commune"));
      console.log("formulaire favoris ", this.favoris)
    }
  }