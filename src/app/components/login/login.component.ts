import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Rx';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';

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

   this.authService.authenticateUser(user).subscribe(data => {
     if (data.success) {
      //  this.flashMessage.show(data.message, {
      //    cssClass: 'alert-success',
      //    timeout: 5000
      //  });
      this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
        this.showSpinner = state;
      });
      this.notificationService.showSuccess(data.title, data.message)
        .then((result) => {
          console.log(result);
          this.router.navigate(['/user/dashboard']);
        })
        .catch((reason) => {
          console.log('--> Alert dismissed: ' + reason);
        });
     } else {
       this.flashMessage.show(data.message, {
         cssClass: 'alert-danger',
         timeout: 5000
       });
     }
   });
  }

  ngOnDestroy() {
    this.spinnerSub.unsubscribe();
  }
}
