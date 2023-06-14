import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.scss']
})
export class RestpasswordComponent implements OnInit {
  resetpasswordForm: FormGroup;
  constructor() {
    
    this.resetpasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    // Other initialization code
  }
  onResetpassword() {
    // Handle the reset password logic here
  }
}
