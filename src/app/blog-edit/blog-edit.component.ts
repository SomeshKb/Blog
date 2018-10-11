import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from '../Services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})

export class BlogEditComponent implements OnInit {
 
  blog:Blog={ _id:null,
    title:"",
  content:"",
  published_date:"",
  like:[],
  authorID:"",
  authorName:"",
  comments:[]};
  
    constructor(private auth:AuthenticationService,private blogService:BlogService,
      private router:Router,private route:ActivatedRoute,private alertService:AlertService) {
  
      if(auth.isLoggedIn()){
      this.auth.isUserLoggedIn.next(true);
    
      }
    }
  
    ngOnInit() {
      let id: string = this.route.snapshot.paramMap.get('id');
      this.getBlogDetails(id);
    }

    getBlogDetails(id:string){
      this.blogService.getBlog(id).subscribe(result=>{
        this.blog=result;
        if(this.blog.authorID!=this.auth.getUserDetails()._id){
          this.router.navigateByUrl("/blogs")

        }
      })
    }
    
    onSubmit(form: NgForm) {
      this.blogService.updateBlog(this.blog).subscribe(()=>{
        this.router.navigateByUrl("/blog/"+this.blog._id)
      },(err)=>{

      }
      );
    }
  }
  