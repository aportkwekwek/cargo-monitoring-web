import { ThemeRoutingModule } from './../theme/theme-routing.module';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../_services/user.service';
import { User } from './../../_classes/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { gsap } from 'gsap';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'

})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  objUser: User
  
  public dataMessage:any;

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private toastr: ToastrService,
    private httpClient: HttpClient,
    private router: Router
  
  ) {
    this.form = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      password: [''],
      confirmpassword:['']
    })
  }

  ngOnInit() {
    this.createAnimation();
    
  }

  createAnimation() {
    gsap.timeline()
      .from('.row', {
      duration: 1,
      opacity:0,
      ease: "power3.out",
      xPercent:-100
      })
      .from('.card-body', {
        opacity:0,
        ease:"power3.out"
      })
      .from('.card-body .input-group', {
        opacity: 0,
        ease:"power3.out"
      })
      .from('.card-body .btn', {
        opacity: 0,
        ease:"power3.out"
      })
      .from('.card-footer', {
        opacity: 0,
        ease: "back",
        yPercent:100
      });
  }

  register(event) {   

    let name = this.form.get('name')?.value;
    let username = this.form.get('username')?.value;
    let email = this.form.get('email')?.value;
    let pass = this.form.get('password')?.value;
    let confirm = this.form.get('confirmpassword')?.value;


    //Input validation
    if (name === '') { this.toastr.error('Name Required!'); return; }
    if (username === '') { this.toastr.error('Username Required!'); return; }
    if (email === '') { this.toastr.error('Email Required!'); return; }
    if (pass != confirm) { this.toastr.error('Password not matched!'); return; }


    //New user object
    var newUser = new User();
    newUser.username = username;
    newUser.name = name;
    newUser.email = email;
    newUser.password = pass;

    

    this._userService.post(newUser).subscribe(
      data => {
        this.dataMessage = data.message;
        
      }, error => {
          this.dataMessage = error.message;
          return;
      })
    

    if (this.dataMessage === 'Success') {
      this.toastr.success('Information Saved!', "System Message");
      this.router.navigateByUrl('/login');
      return;
    } 
      this.toastr.error(this.dataMessage, "System Message");
      return;
    
    
  }
}
