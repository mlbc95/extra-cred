import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private static studentsUrl = 'students';
  private static professorsUrl = 'professors';

  constructor(
    private http: Http,
    private httpService: HttpService) { }

  register(user) {
    return this.httpService.post(AuthService.studentsUrl + '/register', user, {'Content-Type': 'application/json'});
  }

  authenticateUser(user, role) {
    if (role === 'student') {
      return this.httpService.post(AuthService.studentsUrl + '/login', user, {'Content-Type': 'application/json'});
    } else if (role === 'professor') {
      return this.httpService.post(AuthService.professorsUrl + '/login', user, {'Content-Type': 'application/json'});
    }
  }

  initializeProfessorAccount(email: string) {
    const body = {email: email};
    return this.httpService.post(AuthService.professorsUrl + '/init', body, {'Content-Type': 'application/json'});
  }

  verifyProfessor(email: string, token: string) {
    const body = { email: email };
    return this.httpService.post(AuthService.professorsUrl + '/verify?token=' + token, body, {'Content-Type': 'application/json'});
  }

}
