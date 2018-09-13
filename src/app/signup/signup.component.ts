import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/Services/blog.service';
import { TokenPayload } from '../model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailRegex = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  credentials:TokenPayload ={
     'name':"",
     'email':"",
     'password':""
  };

  constructor(private auth:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.register();
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
    }, (err) => {
      console.error(err);
    });
  }

  resetForm(form: NgForm) {

  }

}
