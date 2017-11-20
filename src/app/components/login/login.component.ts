import { StateKey } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
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
    private spinnerService: SpinnerService
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
       this.flashMessage.show(data.message, {
         cssClass: 'alert-success',
         timeout: 5000
       });
       this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => {
        this.showSpinner = state;
      });
      this.router.navigate(['/user/dashboard']);
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
