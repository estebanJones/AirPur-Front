import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './main/components/details/details.component';
import { ListeRelevesComponent } from './main/components/listeReleve/listeReleve.component';
import { MapComponent } from './main/components/map.component';
import { CreateComponent } from './main/components/create/create.component';



const routes : Routes = [
  {
    path: '',
    component: MapComponent,
    children: [
      {
        path : 'listeReleve',
        component : ListeRelevesComponent
      },
      {
        path : 'details',
        component : DetailsComponent
      },
      {
        path : 'create',
        component : CreateComponent
      },
      {
        path : '**',
        redirectTo : 'map'
      }
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {}