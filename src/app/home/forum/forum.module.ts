import { NgModule } from '@angular/core';
import { ForumRoutingModule } from './forum-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RubriqueComponent } from './components/rubrique/component/rubrique.omponent';
import { MessageComponent } from './components/message/component/message.component';
import { ForumComponent } from './components/forum.component';
import { RouterModule } from 'node_modules/@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
      RubriqueComponent,
       MessageComponent,
       ForumComponent
    ],
     imports: [
       CommonModule,
       SharedModule,
       ForumRoutingModule,
       RouterModule,
       HttpClientModule
      
     ],
    exports : [
       CommonModule
     ]
})
export class ForumModule {
}
