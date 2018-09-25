import { Blog } from './../model/blog';
import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {


  @Input() selectedBlog: Blog;
  blog: Blog;


  constructor(private blogService: BlogService, private route: ActivatedRoute
    , private router: Router, private auth: AuthenticationService) {
      if(auth.isLoggedIn()){
        this.auth.isUserLoggedIn.next(true);
      }
     }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(id);
  }

  checkIfLiked() {
    let isLiked;
    let currentUser = this.auth.getUserDetails()._id;
    this.blog.like.users.map(user => {
      if (user === currentUser) {
        isLiked = true;
      }
      else { isLiked = false; }
    })
    return isLiked;
  }

  hitLike(): void {

    this.blogService.updateLike(this.blog, this.auth.getUserDetails())
      .subscribe();
    this.getBlogDetail(this.blog._id);

  }

  getBlogDetail(id: string): void {
    this.blogService.getBlog(id)
      .subscribe(blog => this.blog = blog);
  }
}
