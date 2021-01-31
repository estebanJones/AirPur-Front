import { Component, OnInit, Input } from '@angular/core';
import { RubriqueService } from '../core/rubrique.service';
import { Rubrique } from '../core/rubrique.models';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message} from '../../message/core/message.models';
@Component({
    selector: 'app-rubrique',
    templateUrl: './rubrique.component.html',
    styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {
    rubriques: Rubrique[] = [];
    message: Message[] = [];
    selectedRubrique: Rubrique;
    selectedMessage: Message;
    rubriqueForm: FormGroup;
    showAddForm = false;
    //@Input() rubriquelName: string;
    //rubriqueName: string = 'Rubrique1';
    //@Input() rubriqueName: string;
    constructor(private rubriqueService: RubriqueService, private formBuilder: FormBuilder,
        private router: Router) { }
    ngOnInit(): void {
        this.rubriqueService.getRubriques()

            .subscribe(
                result => {
                    this.rubriques = result;
                },
                err => {
                    // alert('Une erreur est surveneu');
                }
            )

        this.rubriqueForm = this.formBuilder.group({
            content: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required]

        });

        // this.rubriqueService.getMessageByRubrique(this.rubriqueID)
        // .subscribe(
        //     result => {
        //         this.message = result;
        //     },
        //     err => {
        //         alert("erreur de recuperation")
        //     }
        // )
    }
    onSelect(rubrique: Rubrique): void {
        this.selectedRubrique = rubrique;
        this.router.navigate(['/forum/message',rubrique.id])
    }

    // onSelect2(message: Message): void {
    //     this.selectedMessage = message;
    //     this.router.navigate(['/message',message.rubriqueId])
    // }

    // showMessageById(rubriqueId : number){
    //      return this.rubriqueService
    // }
    //Avoir la listes messages par rubrique

    sendRubrique() {
        if (this.rubriqueForm.valid) {
            const content = this.rubriqueForm.get('content').value;
            const postedOn = new Date();
            const title = this.rubriqueForm.get('title').value;
            const description = this.rubriqueForm.get('description').value;
            const utilisateurId = this.rubriqueForm.get('utilisateurId').value;
            console.log(content, postedOn, title, description);
            this.rubriqueService.postRubriques(content, postedOn, title, description, utilisateurId)
                .subscribe(result => {
                    console.log(result);
                    this.router.navigate(['forum/rubrique']);
                }, err => {
                    console.log(err);
                    alert('Rurbique non envoyé')
                })
        }
    }

}
