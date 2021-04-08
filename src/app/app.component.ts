import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatePassword } from './validate-password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  submitted = false;
  
  constructor(public fb: FormBuilder) {}

  registrationForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]]
    }),
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    PasswordValidation: this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
        validator: ValidatePassword.MatchPassword
      })
    })

    //getter method to access formcontrols
    get myForm() {
      return this.registrationForm.controls;
    }

    //submit form
    onSubmit() {
      this.submitted = true;
      if(!this.registrationForm.valid){
        alert('Please fill all required fields')
        return false;
      } else {
        console.log(this.registrationForm.value);
      }
    }

} 