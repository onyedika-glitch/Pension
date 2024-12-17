// src/app/registration/registration.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    rsaPin: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    // Add form submission logic here
    console.log(this.formData);
  }
}