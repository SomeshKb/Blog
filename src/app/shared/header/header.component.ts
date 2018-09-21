import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../model/User';
import { AuthenticationService } from '../../auth/auth.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Login } from '../../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:UserDetails;
  isUserLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService,private store:Store<AppState>) {
   }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()){
    }      
  }

  getLoggedIn(){
    this.user = this.authenticationService.getUserDetails();
  }

  logoutUser(){
    this.authenticationService.logout();
  }
}
