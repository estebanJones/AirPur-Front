import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { MapComponent } from './home/main/components/map.component';

const routes: Routes = [
  {path : '**', redirectTo : 'home'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(res => res.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
