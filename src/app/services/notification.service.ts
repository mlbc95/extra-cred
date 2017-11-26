import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class NotificationService {

  constructor() { }

  showSuccess(type, message) {
    return swal({
      title: 'Success',
      text: message,
      type: type
    });
  }

  showError(type, message) {
    return swal({
      title: 'Error',
      text: message,
      type: type
    });
  }
}
