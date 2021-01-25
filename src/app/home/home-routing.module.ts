import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/components/notification.componenet';


const routes : Routes = [ 
    {
      path: 'map',
      loadChildren: () => import('./main/map.module').then(res => res.MapModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profil/profile.module').then(res => res.ProfileModule)
    },
    { path: 'notifications', component: NotificationComponent},

    
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {}