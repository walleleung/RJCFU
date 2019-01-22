import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class SystemConfigService {

  constructor(private _httpClient: HttpClient) {
  }

  userLogin(login: LoginModel): Observable<string> {
    return of('aaa');
  }
}
