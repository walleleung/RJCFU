import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSheetService {

  private _designStatus = new Subject<boolean>();

  designStatusChange$ = this._designStatus.asObservable();

  constructor() {
  }

  exitDesignMode() {
    this._designStatus.next(true);
  }
}
