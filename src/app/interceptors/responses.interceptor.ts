import 'rxjs/add/operator/do';

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NotificationService } from '../services/notification.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private _spinnerService: SpinnerService,
    private _notificationService: NotificationService) {}
  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    this._spinnerService.requestStarted();
    return next.handle(req).do(
      (event: HttpEvent < any > ) => {
        if (event instanceof HttpResponse) {
          console.log('--> event: ', event);
          console.log('--> status: ', event.status);
          this._spinnerService.requestEnded();
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('--> error: ', err);
          console.log('--> errorStatus: ', err.status);
          this._spinnerService.requestEnded();
        }
      }
    );
  }
}
