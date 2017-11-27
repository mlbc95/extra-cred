import { Injectable } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Injectable()
export class NotificationService {

  constructor() { }

  showSuccess(type: SweetAlertType, message: string) {
    return swal({
      title: 'Success',
      text: message,
      type: type
    });
  }

  showError(type: SweetAlertType, message) {
    return swal({
      title: 'Error',
      text: message,
      type: type
    });
  }
}
