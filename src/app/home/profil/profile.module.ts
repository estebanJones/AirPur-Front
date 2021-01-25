import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { InscriptionComponent } from './inscription/component/inscription.component';
import { CompteComponent } from './compte/components/compte.component';
import { AuthComponent } from './auth/components/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
    declarations: [
      InscriptionComponent,
      CompteComponent,
      AuthComponent

    ],
    imports: [
      CommonModule,
      BrowserModule,
      SharedModule,
      ProfileRoutingModule
    ],
    exports : [
      CommonModule
    ]
  })
  export class ProfileModule { }