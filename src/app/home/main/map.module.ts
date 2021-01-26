import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./components/create/create.component";
import { DetailsComponent } from "./components/details/details.component";
import { ListeRelevesComponent } from "./components/listeReleve/listeReleve.component";

import { MapRoutingModule } from "./map-routing.module"
import { MapComponent } from './components/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

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
      GoogleMapsModule,
      SharedModule
    ],
    exports : [
    ]
  })
  export class MapModule { }
