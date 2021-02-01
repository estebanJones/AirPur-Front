import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartementListe } from '../../core/models/departementsListe.model';
import { NotificationService } from '../../core/services/notification.service';
import { NotificationCreation } from '../../core/models/notificationCreation.model';

@Component({
  selector: 'app-create-notif',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateNotificationComponent implements OnInit {
  departements: DepartementListe[] = [];
    formulaireNotification: FormGroup;
    selectedValue = null;

    constructor(fb: FormBuilder, private notificationService: NotificationService) {
        this.formulaireNotification = fb.group({
          message: [], 
          departement: []
        });
    }
    ngOnInit(): void {
      this.notificationService.getDepartements().subscribe(
        listeDepartements => {
          this.departements = listeDepartements},
        error => console.log(error)
      )
    }

    validNotification() {
      const departement = this.formulaireNotification.get("departement").value;
      const message = this.formulaireNotification.get("message").value;
      const notification = this.notificationDtoBuilder(message, departement.codeDepartement);
      this.notificationService.createNotification(notification).subscribe(
        success => console.log(success),
        error => console.log(error)
      );
    }

    notificationDtoBuilder(message: string, codeDepartement: string): NotificationCreation {
      const notification = new NotificationCreation();
      notification.message = message;
      notification.codeDepartement = codeDepartement;
      return notification;
    }

}
