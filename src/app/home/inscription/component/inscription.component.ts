import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../profil/compte/core/user.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
  })
export class InscriptionComponent implements OnInit{

    static EMAIL_REGX = '^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*([-]{1})?@[a-z0-9]+([\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$';

    loginForm: FormGroup;
   
    constructor(private formBuilder: FormBuilder,
      private router: Router, 
      private userService : UserService ) {
          
     }
  
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        login: ['',
          Validators.compose([
            Validators.required,
            Validators.pattern(InscriptionComponent.EMAIL_REGX)
          ])
        ],
        password: ['', Validators.required]
      })
    }
  
    submitLogin() {
  
      if (this.loginForm.valid) {
        const email = this.loginForm.get('login').value;
        const password = this.loginForm.get('password').value;
        console.log(email, password);
        this.userService.login(email, password)
          .subscribe(result => {
            console.log(result);
            this.router.navigate(['quizz']);
           }, err => {
            console.log(err);
            alert('Login et/ou mot de passe incorrect')
           })
      }
  
    }
  

}