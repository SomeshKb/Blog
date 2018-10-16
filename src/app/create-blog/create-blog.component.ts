import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../model/blog';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from 'src/app/Services/blog.service';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: Blog = {
    _id: null,
    title: "",
    content: "",
    published_date: "",
    like: [],
    authorID: "",
    authorName: "",
    comments: []
  };

  constructor(private auth: AuthenticationService, private blogService: BlogService, private router: Router,
    private alertService: AlertService) {

    if (auth.isLoggedIn()) {
      this.auth.isUserLoggedIn.next(true);
    }
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var today = new Date();
    this.blog.published_date = (today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()).toString();
    this.blog.authorID = this.auth.getUserDetails()._id;
    this.blog.authorName = this.auth.getUserDetails().name;
    this.blog.like = []
    this.blogService.createBlog(this.blog).subscribe(() => {
      this.router.navigateByUrl("/blogs")
    }, (err) => {
    }
    );
  }
}
