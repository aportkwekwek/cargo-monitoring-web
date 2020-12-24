import { Router } from '@angular/router';
import { LocalStorageService } from './../../_services/local-storage.service';
import { CookieService } from './../../_services/cookie.service';
import { TokenStorageService } from './../../_services/token-storage.service';
import {Component} from '@angular/core';
import { navItems } from '../../_nav';



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  
  constructor(
    private _localStorage: LocalStorageService,
    private _cookieService: CookieService,
    private _tokenStorage: TokenStorageService,
    private router : Router
  ) {
 
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this._tokenStorage.signOut();
    this._cookieService.remove('token');
    this._localStorage.remove('token');
    this.router.navigate(['/login']);
  }




}
