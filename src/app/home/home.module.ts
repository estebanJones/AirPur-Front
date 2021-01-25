import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InscriptionComponent } from './profil/inscription/component/inscription.component';
import { CompteComponent } from './profil/compte/components/compte.component';
import { AuthComponent } from './profil/auth/components/auth.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
      InscriptionComponent,
      CompteComponent,
      AuthComponent

    ],
    imports: [
      CommonModule,
      BrowserModule
    ],
    exports : [
      CommonModule
    ]
  })
  export class HomeModule { }