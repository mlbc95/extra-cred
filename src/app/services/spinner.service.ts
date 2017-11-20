import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<{show: boolean}>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  requestStarted() {

  }

  requestEnded() {

  }

}
