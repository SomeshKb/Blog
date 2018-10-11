import { Blog } from './../model/blog';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from '../model/user';
import { Comments } from '../model/blog';
import { NgForm } from '@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],

})
export class BlogDetailsComponent implements OnInit {


  @Input() selectedBlog: Blog;
  blog: Blog;
  user: UserDetails;
  isLiked: boolean;
  likeby: number;

  comments:Comments={
    userName:"",
    content:"",
    userID:""
  };


  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router,
     private auth: AuthenticationService, private userService: UserService, private alertServices:AlertService) {
    
      if (auth.isLoggedIn()) {
      this.auth.isUserLoggedIn.next(true);
      this.user = this.auth.getUserDetails();
    
    }
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(id);
  }


  getCommentUserName( userID:string){
   this.userService.getAuthorName(userID)
     .subscribe(result=> {console.log(result);});
        
  }


  checkIfLiked() {
    let currentUser = this.auth.getUserDetails()._id;
    this.isLiked = false;
    this.blog.like.map(user => {
      if (user == currentUser) {
        this.isLiked = true;
      }
    })
    return this.isLiked;
  }

  hitLike(): void {

    this.isLiked = true;
    this.blogService.updateLike(this.blog, this.auth.getUserDetails())
      .subscribe();
    this.getBlogDetail(this.blog._id);

  }

  checkIfOwner() {
    let isOwner = false;
    let currentUser = this.auth.getUserDetails()._id;
    if (this.blog.authorID === currentUser) {
      isOwner = true
    }

    return isOwner;

  }

  removePost(): void {
    this.blogService.removeBlog(this.blog)
      .subscribe(() => {
        this.alertServices.addAlertToast("Blog deleted successfully")
        this.router.navigateByUrl("/blogs");
      }, (err) => {
        if (err.status === 200) {
          this.alertServices.addAlertToast("Blog deleted successfully")
          this.router.navigateByUrl("/blogs");
        } else if (err.status === 404) {
          this.alertServices.addAlertToast("Blog Not Found")      
        }
      }

      )
  }


  editPost(): void {
    this.router.navigateByUrl("/blog/edit/"+this.blog._id);

  }




  getBlogDetail(id: string): void {
    this.blogService.getBlog(id)
      .subscribe(blog => {
        this.blog = blog;
        this.checkIfLiked()
        this.likeby = this.blog.like.length;
      });

  }

  onSubmit(form: NgForm) {
    this.comments.userID=this.auth.getUserDetails()._id;;
    this.comments.userName=this.auth.getUserDetails().name;
    this.blogService.addComments(this.blog._id,this.comments).subscribe(()=>{
      this.clearCommentForm();

      this.getBlogDetail(this.blog._id);
    });
  }

  clearCommentForm(){
    this.comments.content=""
  }
}
