import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
  })
export class NotificationComponent implements OnInit{
    formulaireNotification: FormGroup;
    constructor(fb: FormBuilder) {
        this.formulaireNotification = fb.group({
            message: [], 
            departement: []
          });
    }
    ngOnInit(): void {
     
    }

    validNotification() {
      const departement = this.formulaireNotification.get("departement").value;
      const message = this.formulaireNotification.get("message").value;
      console.log("departement ", departement);  
      console.log("message ", message);
    }
}