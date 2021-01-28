import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './components/forum.component';
import { RubriqueComponent } from './components/rubrique/component/rubrique.omponent';
import { MessageComponent } from './components/message/component/message.component';


// const routes : Routes = [ 
//    { path: '', component: RubriqueComponent},  
//    { path: 'rubrique', component: RubriqueComponent},
//    { path: 'message', component: MessageComponent},
//    { path: 'forum', component: ForumComponent},
//    { path: '**', redirectTo :''}  
// ];

const routes : Routes = [
  {
    path: '',
    component: ForumComponent,
    children: [
      {
        path : 'rubrique',
        component : RubriqueComponent
      },
      {
        path : 'message/:id',
        component : MessageComponent
      },
      {
        path : '**',
        redirectTo : 'rubrique'
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
export class ForumRoutingModule {}