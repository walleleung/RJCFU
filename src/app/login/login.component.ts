import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private _formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this._formBuild.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rememberMe: [true]
    });
  }

  submitForm() {

  }
}
