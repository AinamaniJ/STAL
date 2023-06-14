import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.scss']
})
export class CreatepasswordComponent implements OnInit {
  minPw = 8;
  formGroup!: FormGroup;
  createpasswordForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      password2: ['', [Validators.required]]
    }, { validator: passwordMatchValidator });

    this.createpasswordForm = this.formBuilder.group({}); 
  }

  
  get password() { return this.formGroup.get('password'); }
  get password2() { return this.formGroup.get('password2'); }

  onCreatepassword() {
    
  }

  onPasswordInput() {
    if (this.formGroup.hasError('passwordMismatch') && this.password2)
      this.password2.setErrors([{ 'passwordMismatch': true }]);
    else if (this.password2)
      this.password2.setErrors(null);
  }
}

export const passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl<any, any>): ValidationErrors | null => {
  if (formGroup.get('password')!.value === formGroup.get('password2')!.value)
    return null;
  else
    return { passwordMismatch: true };
};
