export class NotificationListe {
    id : number;
    message : string;
    codeDepartement : string;
    userNameEmetteur : string;
    dateCreation : Date;

    constructor(params?: any) {
        Object.assign(this, params);
    }

}