import { LocalStorageService } from './local-storage.service';
import { CookieService } from './cookie.service';
import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private jwtTokenService: TokenStorageService,
    private cookieService: CookieService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.jwtTokenService.jwtToken != null) {
      this.router.navigate(['/dashboard']);
    } 

    if (this.jwtTokenService.isTokenExpired()) {
      this.router.navigate(['/dashboard']);
    }
  
    return true;
  }
  
}