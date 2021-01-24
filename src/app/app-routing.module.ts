import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { AProposComponent } from './home/legal/a-propos/a-propos.component';
import { ConditionsGenComponent } from './home/legal/conditions-gen/conditions-gen.component';
import { ConfidentialiteComponent } from './home/legal/confidentialite/confidentialite.component';
import { CookiesComponent } from './home/legal/cookies/cookies.component';
import { AuthComponent } from './home/profil/auth/components/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full'},
  
  { path: 'connexion', component: AuthComponent},
  { path: 'conditionsGen', component: ConditionsGenComponent},
  { path: 'confidentialites', component: ConfidentialiteComponent},
  { path: 'aPropos', component: AProposComponent},
  { path: 'cookies', component: CookiesComponent},
  
  {
    path: 'map',
    loadChildren: () => import('./home/main/map.module').then(res => res.MapModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: NoPreloading,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
