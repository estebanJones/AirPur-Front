import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { AuthComponent } from './home/profil/auth/components/auth.component';
import { CompteComponent } from './home/profil/compte/components/compte.component';

import { InscriptionComponent } from './home/profil/inscription/component/inscription.component';
import { RelevesComponent } from './home/profil/releves/components/releves.component';
import { MapComponent } from './home/main/components/map.component';
import { NotificationComponent } from './home/notification/components/notification.componenet';

const routes: Routes = [
 // { path: '', redirectTo: 'map', pathMatch: 'full'},
  { path: '', component: MapComponent},
  { path: 'map', component : MapComponent},
  { path: 'connexion', component: AuthComponent},
  { path: 'user_profile', component: CompteComponent},
  { path: 'releves', component: RelevesComponent},
  { path: 'notifications', component: NotificationComponent},
  { path: 'inscription', component: InscriptionComponent},

  {
    path: 'map',
    loadChildren: () => import('./home/main/map.module').then(res => res.MapModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: NoPreloading,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
