import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MapRoutingModule } from "./map-routing.module"
import { GoogleMapsModule } from '@angular/google-maps';

import { CreateComponent } from "./components/create/create.component";
import { DetailsComponent } from "./components/details/details.component";
import { ListeRelevesComponent } from "./components/listeReleve/listeReleve.component";
import { MapComponent } from './components/map.component';

import { MapService } from "./core/map.service";

@NgModule({
    declarations: [
      ListeRelevesComponent,
      CreateComponent,
      DetailsComponent,
      MapComponent
    ],
    imports: [
      CommonModule,
      MapRoutingModule,
      GoogleMapsModule
    ],
    providers: [
      MapService
    ],
    exports: [
    ]
  })
  export class MapModule { }