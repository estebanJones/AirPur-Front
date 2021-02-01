import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilisateur } from '../../profil/auth/core/auth.domain';
import { DepartementListe } from '../core/models/departementsListe.model';
import { NotificationListe } from '../core/models/NotificationListe.model';
import { NotificationService } from '../core/services/notification.service';


@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
  })
export class NotificationComponent implements OnInit{
    notifications: NotificationListe[] = [];
    formulaireNotification: FormGroup;
    selectedValue = null;
    utilisateur: Utilisateur = new Utilisateur();
    constructor(private notificationService: NotificationService) {
        
    }
    ngOnInit(): void {
      this.utilisateur = JSON.parse(localStorage.getItem("utilisateur")) as Utilisateur;
      this.notificationService.getNotificationsByUser(this.utilisateur.id).subscribe(
        listeNotification => {
          this.notifications = listeNotification;
          console.log(this.notifications);
        },
        error => console.log(error)
      )
      
    }

    getNotificationsByUser() {
      
    }
}