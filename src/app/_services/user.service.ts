import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../_classes/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};

export interface Drivers{
  name: string[];
  position_title: string[];
  latitude: number[];
  longitude: number[];

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly CON_URL = "https://test-app1001.herokuapp.com/api";

  constructor(private http : HttpClient){}

  post(newUser: User):Observable<any> {
    return this.http.post(this.CON_URL+'/register', newUser);
  }

  getUser(credentials): Observable<any>{
    return this.http.post(this.CON_URL + '/login', credentials);
  }

  getDrivers(): Observable<any>{
    return this.http.get(this.CON_URL+ '/getdrivers');
  }

}
