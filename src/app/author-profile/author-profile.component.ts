import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from 'src/app/Services/blog.service';
import { Blog } from '../model/blog';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../model/User';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.css']
})
export class AuthorProfileComponent implements OnInit {

  author: UserDetails;

  blog:Blog[];

  constructor(private blogService:BlogService,private route: ActivatedRoute,private authenticationService: AuthenticationService,private userService: UserService) { 
    if(authenticationService.isLoggedIn()){
      this.authenticationService.isUserLoggedIn.next(true);
    }
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.getAuthorDetails(id);
  }

  getAuthorDetails(id:string){
    this.userService.getAuthorDetails(id)
    .subscribe(result=>{
      this.author=result;
      this.getAuthorBlogs(this.author._id);
    })
  }


  getTotalLikes(): void {
    this.userService.getUserLikesCount(this.author.name)
    .subscribe(result=>{
       result=JSON.stringify(result);
      });
  }

  getAuthorBlogs(id:string): void{

    this.userService.getUserBlogs(id)
    .subscribe(result=>{
      this.blog=result
    });
  }
}