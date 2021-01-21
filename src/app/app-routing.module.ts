import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { AuthComponent } from './home/profil/auth/components/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full'},
  { path: 'connexion', component: AuthComponent},
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
