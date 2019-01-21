import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Login} from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class SystemConfigService {

  constructor(private _httpClient: HttpClient) {
  }

  userLogin(login: Login): Observable<string> {
    return of('aaa');
  }
}
