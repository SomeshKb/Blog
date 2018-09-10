import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { Blog } from 'src/app/model/blog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  @Input() selectedBlog: Blog;

  blog: Blog;
  id: number;
  constructor(private blogService: BlogService , private route: ActivatedRoute
    , private router: Router) { }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(this.id);
  }

  getBlogDetail(id: number): void {
    this.blogService.getHero(id)
    .subscribe(blog => this.blog = blog);
  }

  hitLike(): void{
    this.blogService.postLike(this.blog)
    .subscribe();
  }


}
