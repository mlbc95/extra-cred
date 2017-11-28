import { IErrorResponse, IProfessorResponse } from '../../models/DataResponse';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

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
          console.log(data);
        },
        (err: IErrorResponse) => {
          console.log(err);
        }
      );
    } else {
      console.log('email cannot be empty');
    }
  }

}
