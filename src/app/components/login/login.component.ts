import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Rx';

import { IErrorResponse, ILoginResponse } from '../../models/DataResponse';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { SweetAlertType } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userEmail: string;
  userPw: string;
  showSpinner = false;
  private spinnerSub: Subscription = new Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  login() {
    this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
      this.showSpinner = state;
    });
    const user = {
      email: this.userEmail,
      password: this.userPw
    };

    this.authService.authenticateUser(user).subscribe(
      (data: ILoginResponse) => {
        console.log(data);
        this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
          this.showSpinner = state;
        });
        this.notificationService.showSuccess(data.title as SweetAlertType, data.message)
          .then((result) => {
            console.log(result);
            this.router.navigate(['/user/dashboard']);
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
  }
}
