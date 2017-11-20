import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  static baseUrl = 'https://extra-cred-backend.herokuapp.com/';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(endpoint: string, headersObject: {[name: string]: string}): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(headersObject);

    return this.httpClient.get(HttpService.baseUrl + endpoint, {headers: headers});
  }

  post(endpoint: string, body: any, headersObject: {[name: string]: string}): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(headersObject);

    return this.httpClient.post(HttpService.baseUrl + endpoint, body, {headers: headers});
  }

  delete(endpoint: string, headersObject: {[name: string]: string}): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(headersObject);

    return this.httpClient.delete(HttpService.baseUrl + endpoint, {headers: headers});
  }

  put(endpoint: string, body: any, headersObject: {[name: string]: string}): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(headersObject);

    return this.httpClient.put(HttpService.baseUrl + endpoint, body, {headers: headers});
  }

}
