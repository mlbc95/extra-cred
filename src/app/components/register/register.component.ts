import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { IRegisterResponse } from '../../models/i-data-response';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';


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

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  register() {

    const regexpTest = new RegExp('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(mail.umsl|umsl)\.edu$');
    const res = regexpTest.test(this.userEmail);

    if (res) {

      const user = {
        firstName: this.fName,
        lastName: this.lName,
        email: this.userEmail,
        password: this.userPw
      };

      this.authService.register(user).subscribe((data: IRegisterResponse) => {
        if (data.success) {
          this.notificationService.showSuccess(data.title, data.message)
            .then((result) => {
              this.router.navigate(['login']);
            })
            .catch((reason) => {
              console.log('--> Alert dismissed: ', reason);
            });
        }else {
          this.notificationService.showError(data.title, data.message)
          .then((result) => {
            console.log(result);
          })
          .catch((reason) => {
            console.log('--> Error dismissed: ', reason);
          });
        }
      });
    } else {
      this.notificationService.showError('error', 'Please use a valid email')
        .then((result) => {
          console.log(result);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
  }
}
