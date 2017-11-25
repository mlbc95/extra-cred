import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';


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

      this.authService.register(user).subscribe(data => {
        if (data.success) {

          this.flashMessage.show(data.message, {
            cssClass: 'alert-success',
            timeout: 5000
          });
          // this.router.navigate(['login'])
        }else {
          this.flashMessage.show(data.message, {
            cssClass: 'alert-danger',
            timeout: 5000
          });
        }
      });


    } else {

      this.flashMessage.show('Please Enter a Valid Email', {
        cssClass: 'alert-danger',
        timeout: 5000
      });


    }



  }
}
