import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CreateNotificationComponent } from './components/create/create.component';

import { NotificationComponent } from './components/notification.component';


const routes : Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: [
      {
        path : 'create',
        component : CreateNotificationComponent
      },
      {
        path : '**',
        redirectTo : ''
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
export class NotificationRoutingModule {}
