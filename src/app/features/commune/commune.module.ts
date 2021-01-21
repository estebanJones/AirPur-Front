import { CommuneComponent } from './commune/commune.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommuneRoutingModule } from './commune-routing.module';

@NgModule({
    declarations : [
      CommuneComponent
    ],
    imports : [
      CommonModule,
      SharedModule,
      CommuneRoutingModule     
    ],
    exports :[

    ],
  })
export class CommuneModule{

}