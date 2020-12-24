import { LocalStorageService } from './../../_services/local-storage.service';
import { CookieService } from './../../_services/cookie.service';
import { User } from './../../_classes/user';
import { Observable } from 'rxjs';
import { TokenStorageService } from './../../_services/token-storage.service';
import { UserService } from '../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { gsap } from 'gsap';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{ 

  form: FormGroup;
  errorMessage = '';
  credentials: Observable<any>;


  constructor(
    private fbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _userService :UserService,
    private tokenStorage: TokenStorageService,
    private _cookies: CookieService,
    private _localStorage: LocalStorageService,
    private toastr : ToastrService
  )
  
  {
    this.form = this.fbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      
    });
  }
  
  createAnimation() {

    gsap.timeline()
      .from('#leftCard', {
        duration: 1,
        ease: "power3.out",
        xPercent: 100
      })
      .from('.card-body', {
        duration: 0.3,
        opacity: 0,
        ease: "back"
      })
      .from('.card-body .input-group', {
        duration: 0.3,
        opacity: 0,
        ease: "power3.out"
      })
      .from('.card-body .btn' ,{
        duration:0.3,
        opacity: 0,
        ease:"power3.out"
      })
      .from('#rightcard', {
        opacity: 0,
        ease:"power3.out"
      });
  }

  ngOnInit() {
    this.createAnimation();
  }


  submitLogin(response) {

    let username = this.form.get('username')?.value;
    let password = this.form.get('password')?.value;


    var userCredentials = new User();
    userCredentials.username = username;
    userCredentials.password = password;
    

    this._userService.getUser(userCredentials).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.id);
        this.tokenStorage.saveUserName(data.name);
        this._cookies.set('cookie', data.token);
        this._localStorage.set('token', data);
        this.router.navigate(['/dashboard']);

      }, error => {
        
        this.toastr.error(error.error.message, "System Message");
        // this.errorMessage = error;
    
      }
    );

  }

  reloadPage(): void{
    window.location.reload();
  }

}
