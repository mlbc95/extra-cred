import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<boolean>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  requestStarted() {
    this.spinnerSubject.next(true);
  }

  requestEnded() {
    this.spinnerSubject.next(false);
  }

}
