import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SweetAlertType } from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-professor-verify',
  templateUrl: './professor-verify.component.html',
  styleUrls: ['./professor-verify.component.css']
})
export class ProfessorVerifyComponent implements OnInit {
  private authToken: string;
  email: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    // Get Token
    this.authToken = this.activatedRoute.snapshot.queryParams['token'] ? this.activatedRoute.snapshot.queryParams['token'] : undefined;
  }

  verifyProfessor() {
    if (this.email) {
      this.authService.verifyProfessor(this.email, this.authToken).subscribe();
    } else {
      this.notificationService.showError('error' as SweetAlertType, 'Email cannot be empty');
    }
  }

}
