import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './notification/components/create/create.component';

@NgModule({
    declarations: [

    CreateComponent],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports : [
    ]
  })
  export class HomeModule { }