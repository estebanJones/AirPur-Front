import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compte',
    templateUrl: './compte.component.html',
    styleUrls: ['./compte.component.css']
  })
export class CompteComponent implements OnInit{

    static EMAIL_REGX = '^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*([-]{1})?@[a-z0-9]+([\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$';

    loginForm: FormGroup;
    ngOnInit(): void{
        
    }

    // constructor(private formBuilder: FormBuilder,
    //   private loginService: LoginService,
    //   private router: Router) {
  
  
    // }
  
    // ngOnInit() {
    //   this.loginForm = this.formBuilder.group({
    //     login: ['',
    //       Validators.compose([
    //         Validators.required,
    //         Validators.pattern(CompteComponent.EMAIL_REGX)
    //       ])
    //     ],
    //     password: ['', Validators.required]
    //   })
    // }
  
    // submitLogin() {
  
    //   if (this.loginForm.valid) {
    //     const email = this.loginForm.get('login').value;
    //     const password = this.loginForm.get('password').value;
  
    //     // POST api/v1/login
    //     // TODO-2 : faire appel au service loginService.login()
    //     console.log(email, password);
    //     this.loginService.login(email, password)
    //       .subscribe(result => {
    //         console.log(result);
    //         this.router.navigate(['quizz']);
    //        }, err => {
    //         console.log(err);
    //         alert('Login et/ou mot de passe incorrect')
    //        })
    //   }
  
    // }
  

}