import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private baseUrl:string= "https://extra-cred-backend.herokuapp.com/";

  constructor(private http:Http) { }

  register(user)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.baseUrl + "students/register",user,{headers:headers})
      .map(res => res.json());

  }

  authenticateUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.baseUrl + "students/login",user,{headers:headers})
      .map(res =>res.json());
  }

}
