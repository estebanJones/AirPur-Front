import { Component, OnInit } from '@angular/core';
import { Message } from '../core/message.models';
import { MessageService } from '../core/message.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
    messages: Message[] = [];
    selectedMessage : Message;
    messageForm: FormGroup;
    showAddForm = false;

    constructor(private messageService: MessageService,
        private formBuilder: FormBuilder,
        private router: Router, private route : ActivatedRoute) { }

    // Afficher les messages d'un rubrique donnée
    ngOnInit(): void {
        const rubrique = this.route.snapshot.params['rubriqueId'];
        console.log(rubrique);
        this.messageService.getMessageByRubrique(rubrique)
            .subscribe(
                result => {
                    this.messages = result;
                },
                err => {
                    alert('Une erreur est surveneu');
                }
            )

        this.messageForm = this.formBuilder.group({
            content : ['', Validators.required],
            postedOn : ['', Validators.required]

        })
    }
//Utilisateur principal.get Name dans la base de donnée
// Id rubrique : il faut l'envoyé 
//const utilisateurId : number = JSON.parse(localStorage.getItem("utilisateur"));
    onSelect(message: Message): void {
        this.selectedMessage = message;
      }

    sendMessage() {
        if (this.messageForm.valid) {
          const content = this.messageForm.get('content').value;
          const postedOn = this.messageForm.get('postedOn').value;  
          console.log(content,postedOn);
          this.messageService.postMessage(content, postedOn)
            .subscribe(result => {
              console.log(result);
              this.router.navigate(['forum/message']);
             }, err => {
              console.log(err);
              alert('Message non envoyé')
             })
        }
  
      }
  
}
