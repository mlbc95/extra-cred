import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Rx';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { ILoginResponse } from '../../models/i-data-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userEmail: string;
  userPw: string;
  showSpinner = false;
  private spinnerSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
      this.showSpinner = state;
    });
   const user = {
     email: this.userEmail,
     password: this.userPw
   };

   this.authService.authenticateUser(user).subscribe((data: ILoginResponse) => {
     console.log(data);
     this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
        this.showSpinner = state;
     });
     if (data.success) {
      this.notificationService.showSuccess(data.title, data.message)
        .then((result) => {
          console.log(result);
          this.router.navigate(['/user/dashboard']);
        })
        .catch((reason) => {
          console.log('--> Alert dismissed: ', reason);
        });
     } else {
       console.log(data);
       this.notificationService.showError(data.title, data.message)
        .then((result) => {
          console.log(result);
        })
        .catch((reason) => {
          console.log('--> Error dismissed: ', reason);
        });
     }
   });
  }

  ngOnDestroy() {
    this.spinnerSub.unsubscribe();
  }
}
