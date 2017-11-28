import { IErrorResponse, IProfessorResponse } from '../../models/DataResponse';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';
import { SweetAlertType } from 'sweetalert2';

@Component({
  selector: 'app-professor-landing',
  templateUrl: './professor-landing.component.html',
  styleUrls: ['./professor-landing.component.css']
})
export class ProfessorLandingComponent implements OnInit {
  email = '';

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  initProf() {
    if (this.email) {
      this.authService.initializeProfessorAccount(this.email).subscribe(
        (data: IProfessorResponse) => {
          // tslint:disable-next-line:max-line-length
          this.notificationService.showSuccess(data.title as SweetAlertType, `An email has been sent to ${this.email}. Please check your email and follow the instruction in the email. Thank you.`);
        },
        (err: IErrorResponse) => {
          this.notificationService.showError(err.error.title as SweetAlertType, err.statusText);
        }
      );
    } else {
      this.notificationService.showError('error', 'Email cannot be empty');
    }
  }

}
