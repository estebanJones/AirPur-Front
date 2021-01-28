import { Component, OnInit } from '@angular/core';
import { Message } from '../core/message.models';
import { MessageService } from '../core/message.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
    messages: Message[] = [];
    messageForm: FormGroup;

    constructor(private messageService: MessageService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    // Afficher les messages
    ngOnInit(): void {
        this.messageService.getMessages()
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
