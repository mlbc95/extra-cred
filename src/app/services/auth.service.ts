import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private static studentsUrl = 'students';
  private static professorsUrl = 'professors';
  // private baseUrl = 'https://extra-cred-backend.herokuapp.com/';

  constructor(
    private http: Http,
    private httpService: HttpService) { }

  register(user) {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // return this.http.post(this.baseUrl + 'students/register', user, {headers: headers})
    //   .map(res => res.json());

    return this.httpService.post(AuthService.studentsUrl + '/register', user, {'Content-Type': 'application/json'});
  }

  authenticateUser(user) {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // return this.http.post(this.baseUrl + 'students/login', user, {headers: headers})
    //   .map(res => res.json());
    return this.httpService.post(AuthService.studentsUrl + '/login', user, {'Content-Type': 'application/json'});
  }

}
