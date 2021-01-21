import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./components/create/create.component";
import { DetailsComponent } from "./components/details/details.component";
import { ListeRelevesComponent } from "./components/listeReleve/listeReleve.component";

import { MapRoutingModule } from "./map-routing.module"
import { MapComponent } from './components/map.component';
import { AgmCoreModule } from '@agm/core';

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
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyChLcyRKnpxOQ7e-WH1ukCd48vfnRizAJU"
      })
    ],
    exports : [
    ]
  })
  export class MapModule { }