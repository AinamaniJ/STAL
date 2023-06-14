import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;
  hide: boolean = false;
  constructor() {
    
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  ngOnInit() {
    // Other initialization code
  }

  onSignup() {
    if (this.signUpForm.valid) {
      const firstname = this.signUpForm.value.firstname;
      const lastname = this.signUpForm.value.lastname;
      const email = this.signUpForm.value.email;
      const institution = this.signUpForm.value.institution;
      // Implement your login logic here
    }
  }
}
