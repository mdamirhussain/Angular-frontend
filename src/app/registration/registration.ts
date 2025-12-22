import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',  
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
registrationForm: any;
 constructor(private fb: FormBuilder) {

  this.registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

    gender: ['', Validators.required],

    dob: ['', Validators.required],

    country: ['', Validators.required],

    address: ['', [Validators.required, Validators.minLength(5)]],

    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],

    terms: [false, Validators.requiredTrue]
  }, {
    validators: [passwordMatchValidator]
  });
}
  submit() {
    console.log(this.registrationForm.value);
    console.log("Form Status:", this.registrationForm.valid);
    alert("Registration Successful!");
  }

  get f() {
    return this.registrationForm.controls;
  }
}

// ⭐ CUSTOM VALIDATOR for Confirm Password
export function passwordMatchValidator(control: AbstractControl) {
  const pass = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;

  return pass === confirm ? null : { passwordMismatch: true };
}