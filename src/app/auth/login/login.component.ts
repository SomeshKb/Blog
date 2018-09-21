import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenPayload, UserDetails, TokenResponse } from '../../model/User';
import { AuthenticationService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { tap } from 'rxjs/operators';
import { Login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailRegex = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };
  user: TokenResponse;
  
  constructor(private auth:AuthenticationService,private router: Router,private store: Store<AppState>) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/blogs');
    }
  }

  onSubmit(form: NgForm) {
    this.login();
  }

  login() {
    this.auth.login(this.credentials).pipe(tap(user=>{

      this.store.dispatch(new Login({user}));

      this.router.navigateByUrl('/blogs');
    })
  ).subscribe(() => {   
    }, (err) => {
      console.error(err);
    });
  }


  resetForm(form: NgForm) {
      this.credentials={
        'email':"",
        'password':""
     };
  }

  getDetails(){
     // this.user = this.auth.getUserDetails();
  }

}
