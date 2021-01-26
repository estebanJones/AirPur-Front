import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-auth',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
  })
  export class CreateComponent implements OnInit {
    options: FormGroup;
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');
    
    // DATEPICKER
    range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
    constructor(fb: FormBuilder) {
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
    }

    ngOnInit() {

    }
  }