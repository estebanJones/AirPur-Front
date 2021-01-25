import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { ListeRelevesComponent } from './components/listeReleve/listeReleve.component';
import { MapComponent } from './components/map.component';

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
        redirectTo : 'listeReleve'
      }
    ]
  },
  {
    path : '**',
    redirectTo : ''
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {}
