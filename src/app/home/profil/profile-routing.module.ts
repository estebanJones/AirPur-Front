import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/components/auth.component';
import { CompteComponent } from './compte/components/compte.component';
import { InscriptionComponent } from './inscription/component/inscription.component';
import { RelevesComponent } from './releves/components/releves.component';

const routes : Routes = [ 
   

  { path: '', component: CompteComponent},
  { path: 'connexion', component: AuthComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'releves', component: RelevesComponent},
  { path: '**', redirectTo :''},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}