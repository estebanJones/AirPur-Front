import { Component, OnInit, Input } from '@angular/core';
import { RubriqueService } from '../core/rubrique.service';
import { Rubrique } from '../core/rubrique.models';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-rubrique',
    templateUrl: './rubrique.component.html',
    styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {
    rubriques : Rubrique[] = [];
    selectedRubrique : Rubrique;
    rubriqueForm: FormGroup;
    //@Input() rubriquelName: string;
    //rubriqueName: string = 'Rubrique1';
    //@Input() rubriqueName: string;
    constructor( private rubriqueService : RubriqueService,private formBuilder: FormBuilder,
        private router: Router) { }
    ngOnInit(): void {
        this.rubriqueService.getRubriques()
            .subscribe(
                result => {
                    this.rubriques = result;
                }, 
                err => {
                    alert('Une erreur est surveneu');
                }        
            )

            this.rubriqueForm = this.formBuilder.group({
                content : ['', Validators.required],
                postedOn : ['', Validators.required],
                title : ['', Validators.required],
                description: ['', Validators.required]
    
            })    
    }
    onSelect(rubrique: Rubrique): void {
        this.selectedRubrique = rubrique;
      }
   

    sendRubrique() {
        if (this.rubriqueForm.valid) {
          const content = this.rubriqueForm.get('content').value;
          const postedOn = this.rubriqueForm.get('postedOn').value;
          const title = this.rubriqueForm.get('title').value;
          const description = this.rubriqueForm.get('description').value;
          console.log(content, postedOn, title, description);
          this.rubriqueService.postRubriques(content, postedOn, title, description)
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
