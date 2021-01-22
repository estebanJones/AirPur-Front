import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './home/profil/auth/components/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './home/profil/auth/core/auth.service';
import { MenuService } from './services/menu.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    GoogleMapsModule
  ],
  providers: [
    AuthService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
