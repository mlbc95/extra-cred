import { Observable } from 'rxjs/Rx';
import { Router, RoutesRecognized } from '@angular/router';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RoutesListeningService {
  routerEvents: RoutesRecognized[];
  private userIdSubject: Subject<string> = new Subject<string>();
  userIdState$ = this.userIdSubject.asObservable();
  constructor() {
  }

  getRouteEvent(routerEvent: RoutesRecognized[]) {
    this.routerEvents = routerEvent;
  }

  resolvePreviousRoutes(): Observable<string> {
    if (this.routerEvents) {
      const toLogin = this.routerEvents[1].url ===  '/login' ? true : false;

      if (toLogin) {
        const previousUrl = this.routerEvents[0].url;
        return Observable.create((observer) => {
          if (previousUrl === '/professor-landing') {
            observer.next('professor');
            observer.complete();
          } else if (previousUrl === '/register') {
            observer.next('student');
            observer.complete();
          }
        });
      }
    } else {
      return Observable.create((observer) => {
        observer.error('Router events resolve error --> : Login was landed on App Init');
      });
    }
  }

  saveCurrentUserId(id: string): void {
      this.userIdSubject.next(id);
  }

  loadCurrentUserId(): Observable<string> {
      return this.userIdState$;
  }
}
