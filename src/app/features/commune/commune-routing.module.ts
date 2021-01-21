import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommuneComponent } from './commune/commune.component';

const routes : Routes = [
    {
      path : '',
      component : CommuneComponent
    },
    {
      path : '**',
      redirectTo : ''
    }
  ]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CommuneRoutingModule{
  
  }