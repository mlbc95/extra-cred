import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Rx';
import { SweetAlertType } from 'sweetalert2';

import { IErrorResponse, ILoginResponse } from '../../models/DataResponse';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { RoutesListeningService } from './../../services/routes-listening.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userEmail: string;
  userPw: string;
  userRole = 'student';
  showSpinner = false;

  private spinnerSub: Subscription = new Subscription;
  private fromUrlSub: Subscription = new Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService,
    private routesListeningService: RoutesListeningService
  ) {}

  ngOnInit() {
    this.fromUrlSub = this.routesListeningService.resolvePreviousRoutes()
      .filter(data => !!data)
      .subscribe(
      (fromUrl: string) => {
        this.userRole = fromUrl;
      },
      (error: string) => {
        console.log(error);
      }
    );
  }

  login() {
    this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
      this.showSpinner = state;
    });
    const user = {
      email: this.userEmail,
      password: this.userPw
    };

    this.authService.authenticateUser(user, this.userRole).subscribe(
      (data: ILoginResponse) => {
        console.log(data);
        this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
          this.showSpinner = state;
        });
        this.notificationService.showSuccess(data.title as SweetAlertType, data.message)
          .then((result) => {
            console.log(result);
            this.router.navigate([`/user/${this.userRole}/dashboard/${data.response._id}`]);
          })
          .catch((reason) => {
            console.log('--> Alert dismissed: ', reason);
          });
      },
      (err: IErrorResponse) => {
        this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
          this.showSpinner = state;
        });
        this.notificationService.showError(err.error.title as SweetAlertType, err.error.message);
      });
  }

  ngOnDestroy() {
    this.spinnerSub.unsubscribe();
    this.fromUrlSub.unsubscribe();
  }
}
