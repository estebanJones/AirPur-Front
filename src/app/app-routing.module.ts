import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full'},
  { path: 'connexion', component: AuthComponent},
  {
    path: 'commune',
    loadChildren: () => {
      return import('./features/commune/commune.module').then(res => res.CommuneModule)
    },
  }
];

// const routes: Routes = [
//   // TODO-4 : utiliser AuthenticationGuardService pour la page about egalement
//   {
//     path: 'quizz',
//     loadChildren: () => {
//       return import('./quizz/quizz.module').then(res => res.QuizzModule)
//     },
//     canActivate: [AuthenticationGuardService]
//   },
//   {
//     path: 'about',
//     loadChildren: () => {
//       return import('./about/about.module').then(res => res.AboutModule)
//     }
//   },
//   {
//     path: 'login',
//     loadChildren: () => {
//       return import('./login/login.module').then(res => res.LoginModule)
//     }
//   },
//   {
//     path: '**',
//     redirectTo: 'quizz'
//   }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
