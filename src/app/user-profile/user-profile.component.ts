import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/User';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from 'src/app/Services/blog.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserDetails;
  constructor(private blogService:BlogService,private authenticationService: AuthenticationService) { 
    if(authenticationService.isLoggedIn()){
      this.authenticationService.isUserLoggedIn.next(true);
    }
  }

  ngOnInit() {
      this.user=this.authenticationService.getUserDetails();
      if(this.user){
        this.getTotalLikes();
      }
  }

  getTotalLikes(): void {
    this.blogService.getUserLikesCount(this.user.name)
    .subscribe(result=>{
       result=JSON.stringify(result);
      console.log(JSON.parse(result).count);
      });
  }

}
