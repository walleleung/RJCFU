import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  isLoadingCaptcha: boolean;

  backgroundPanels: Array<number> = [1, 2, 3, 4];

  loginUser: LoginModel;

  constructor(private _formBuild: FormBuilder) {
    this.isLoadingCaptcha = true;
    this.loginUser = <LoginModel>{};
  }

  ngOnInit() {
    this.validateForm = this._formBuild.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.status === 'VALID') {
      // login
    }
  }
}
