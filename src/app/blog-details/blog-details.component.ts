import {Blog} from './../model/blog';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SimpleChanges } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit  {
 

  @Input() selectedBlog: Blog;
  blog: Blog;


  
  constructor(private blogService: BlogService , private route: ActivatedRoute
    , private router: Router) { }
    
  ngOnInit() {
    let id:string= this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(id);
  }

  hitLike(): void{
    this.blogService.updateLike(this.blog)
    .subscribe();
    this.getBlogDetail(this.blog._id);
  }
   

  getBlogDetail(id: string): void {
    this.blogService.getBlog(id)
    .subscribe(blog =>this.blog = blog);
   
  }



}
