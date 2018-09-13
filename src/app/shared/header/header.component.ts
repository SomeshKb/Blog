import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../model/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:UserDetails;
  constructor(private authenticationService: AuthenticationService) {
   }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()){
      this.getLoggedIn();      
    }      
  }

  getLoggedIn(){
    this.user = this.authenticationService.getUserDetails();
  }

  logoutUser(){
    this.authenticationService.logout();
  }
  
  


}
