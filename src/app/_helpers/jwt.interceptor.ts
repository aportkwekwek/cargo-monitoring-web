import { TokenStorageService } from './../_services/token-storage.service';
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
 
  constructor( private authService: TokenStorageService) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.jwtToken;
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}

[
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]