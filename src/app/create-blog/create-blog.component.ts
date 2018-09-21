import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../model/blog';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from 'src/app/Services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog:Blog={ _id:null,
  title:"",
content:"",
published_date:"",
like:{count:0,users:[]},
author:""};

  constructor(private auth:AuthenticationService,private blogService:BlogService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    var today = new Date();
    console.log(today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear());
    this.blog.published_date=(today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()).toString();
    this.blog.author=this.auth.getUserDetails().name;
    this.blog.like= {count:0,users:[]}
    this.blogService.createBlog(this.blog).subscribe();
    this.router.navigateByUrl("/blogs")
  }
}
