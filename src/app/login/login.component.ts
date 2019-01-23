import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../model/login.model';
import {SystemService} from '../service/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoadingCaptcha: boolean;

  backgroundPanels: Array<number> = [1, 2, 3, 4];

  loginUser: LoginModel;

  constructor(private _formBuild: FormBuilder,
              private _systemService: SystemService) {
    this.isLoadingCaptcha = true;
    this.loginUser = <LoginModel>{};
  }

  ngOnInit() {
    this.loginForm = this._formBuild.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.loginForm.status === 'VALID') {      // login
      this.loginUser = this.loginForm.getRawValue();
      this._systemService.login(this.loginUser).subscribe(p => {
        if (p) {
        }
      });
    }
  }
}
