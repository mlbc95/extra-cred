import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { SweetAlertType } from 'sweetalert2';

import { IErrorResponse, IProfessorResponse } from '../../models/DataResponse';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-professor-landing',
  templateUrl: './professor-landing.component.html',
  styleUrls: ['./professor-landing.component.css']
})
export class ProfessorLandingComponent implements OnInit, OnDestroy {
  email = '';
  showSpinner = false;
  private spinnerSub: Subscription = new Subscription;

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  initProf() {
    this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => this.showSpinner = state);
    if (this.email) {
      this.authService.initializeProfessorAccount(this.email).subscribe(
        (data: IProfessorResponse) => {
          // tslint:disable-next-line:max-line-length
          this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => this.showSpinner = state);
          this.notificationService.showSuccess(data.title as SweetAlertType, `An email has been sent to ${this.email}. Please check your email and follow the instruction in the email. Thank you.`);
        },
        (err: IErrorResponse) => {
          this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => this.showSpinner = state);
          this.notificationService.showError(err.error.title as SweetAlertType, err.error.message);
        }
      );
    } else {
      this.spinnerSub = this.spinnerService.spinnerState.subscribe(state => this.showSpinner = state);
      this.notificationService.showError('error' as SweetAlertType, 'Email cannot be empty');
    }
  }

  ngOnDestroy() {
    this.spinnerSub.unsubscribe();
  }

}
