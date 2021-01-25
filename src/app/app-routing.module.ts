import { NotificationComponent } from './home/notification/components/notification.componenet';
import { NgModule } from '@angular/core';
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
  { path: '**', redirectTo: 'map' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
