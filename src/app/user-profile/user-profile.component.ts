import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/User';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from 'src/app/Services/blog.service';
import { UserService } from 'src/app/services/user.service';
import { Blog } from '../model/blog';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserDetails;
  likes: number;
  blog: Blog[];

  constructor(private blogService: BlogService, private authenticationService: AuthenticationService, private userService: UserService) {
    if (authenticationService.isLoggedIn()) {
      this.authenticationService.isUserLoggedIn.next(true);
    }
  }

  ngOnInit() {
    this.user = this.authenticationService.getUserDetails();
    if (this.user) {
      this.getUserBlogs();
      this.getTotalLikes();
    }
  }

  getTotalLikes(): void {
    this.userService.getUserLikesCount(this.user._id)
      .subscribe(result => {
        if (result == null) {
          this.likes = 0;
        }
        else {
          this.likes = JSON.parse(result['total']);
        }
        console.log(result);
      });
  }

  getUserBlogs(): void {

    this.userService.getUserBlogs(this.user._id)
      .subscribe(result => {
        this.blog = result
      });
  }



}
