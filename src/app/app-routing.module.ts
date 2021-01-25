import { NotificationComponent } from './home/notification/components/notification.componenet';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { AProposComponent } from './home/legal/a-propos/a-propos.component';
import { ConditionsGenComponent } from './home/legal/conditions-gen/conditions-gen.component';
import { ConfidentialiteComponent } from './home/legal/confidentialite/confidentialite.component';
import { CookiesComponent } from './home/legal/cookies/cookies.component';
import { AuthComponent } from './home/profil/auth/components/auth.component';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path: 'map',
    loadChildren: () => import('./home/main/map.module').then(res => res.MapModule)
  },
  
  {
    path: 'profile',
    loadChildren: () => import('./home/profil/profile.module').then(res => res.ProfileModule)
  },
  
  { path: 'notifications', component: NotificationComponent },
  { path: '**', redirectTo: 'map' },
  { path: '', redirectTo: 'map', pathMatch: 'full'},
  
  //{ path: 'connexion', //component: AuthComponent},
   // loadChildren: () => import('./home/profil/auth/components/auth.component')
  
  
  //{ path: 'conditionsGen', component: ConditionsGenComponent},
  //{ path: 'confidentialites', component: ConfidentialiteComponent},
  //{ path: 'aPropos', component: AProposComponent},
  ///{ path: 'cookies', component: CookiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
