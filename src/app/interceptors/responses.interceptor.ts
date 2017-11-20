import 'rxjs/add/operator/do';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}
  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    this._spinnerService.requestStarted();
    return next.handle(req).do(
      event => {
        if (event instanceof HttpResponse) {
          console.log('--> event: ', event);
          console.log('--> status: ', event.status);
          this._spinnerService.requestEnded();
        }
      }
    );
  }
}
