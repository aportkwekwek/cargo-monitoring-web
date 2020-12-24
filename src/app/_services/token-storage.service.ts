import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'token';
const USER_ID = 'userid';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  jwtToken: string;
  decodedToken: { [key: string]: string };
  expiryTime: number;
  user_name: string;

  constructor() { }

  signOut():void {
    window.sessionStorage.clear();
    this.jwtToken = null;
  }
  saveToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.jwtToken = token;
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  saveUser(_id: string): void{
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, _id);
  }

  saveUserName(user_name: string): void{
    window.sessionStorage.removeItem('username_name');
    window.sessionStorage.setItem('user_name', user_name);
    this.user_name = user_name;
  }

  getUserName() {
    return this.user_name;
  }

  getToken() {

    return this.jwtToken;
  }

  getDecodedToken() {
    return jwt_decode(this.jwtToken);
  }


  getEmailAdd(){
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: any = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 500;
    } else {
      return false;
    }
  }


}
