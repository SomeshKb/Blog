import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { BlogService } from '../services/blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailRegex = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  selectedUser:User ={
     'name':"",
     'email':"",
     'password':""
  };
  
  constructor(private blogService:BlogService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
  }


  resetForm(form: NgForm) {
      this.selectedUser={
        'name':"",
        'email':"",
        'password':""
     };
  }

}
