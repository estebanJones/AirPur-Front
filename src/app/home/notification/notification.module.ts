import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationComponent } from './components/notification.component';
import { FavorisService } from '../main/core/favoris.service';
import { CreateNotificationComponent } from '../notification/components/create/create.component';
import { NotificationRoutingModule } from './notification-routing.module';



@NgModule({
    declarations: [
      NotificationComponent,
      CreateNotificationComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      NotificationRoutingModule
    ],
    providers : [
      FavorisService,
    ],
    exports : [
      
    ]
  })
  export class NotificationModule { }
