import { SpinnerService } from '../../services/spinner.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { IRegisterResponse, IErrorResponse } from '../../models/DataResponse';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SweetAlertType } from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userEmail: string;
  userPw: string;
  fName: string;
  lName: string;
  showSpinner = false;
  private spinnerSub: Subscription;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService,
  ) {}

  ngOnInit() {}

  register() {
    this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
      this.showSpinner = state;
    });

    const regexpTest = new RegExp('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(mail.umsl|umsl)\.edu$');
    const res = regexpTest.test(this.userEmail);

    if (res) {

      const user = {
        firstName: this.fName,
        lastName: this.lName,
        email: this.userEmail,
        password: this.userPw
      };

      this.authService.register(user).subscribe(
        (data: IRegisterResponse) => {
          this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
            this.showSpinner = state;
          });
          this.notificationService.showSuccess(data.title as SweetAlertType, data.message)
            .then((result) => {
              console.log(result);
              this.router.navigate(['/login']);
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
        }
      );
    } else {
      this.notificationService.showError('error', 'Please use a valid email')
        .then((result) => {
          console.log(result);
        })
        .catch((reason) => {
          console.log('--> Alert dismissed: ', reason);
        });
    }
  }
}
