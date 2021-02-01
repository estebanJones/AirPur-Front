import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from 'node_modules_/@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { NotificationCreation } from './notificationCreation.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http : HttpClient) { }


  createNotification(notification: NotificationCreation) : Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post(`${environment.baseUrl}${environment.createNotification}`,
      { 
        message: notification.message,
        dateCreation: notification.dateCreation,
        departementId: notification.departementId,
        utilisateurId: notification.utilisateurId
      }, httpOptions)
  }
}
