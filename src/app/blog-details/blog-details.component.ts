import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/blog';
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
  constructor(private blogService: BlogService , private route: ActivatedRoute
    , private router: Router) { }
  ngOnInit() {
    const id: any = +this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(id);
  }

  getBlogDetail(id: number): void {
    this.blogService.getHero(id)
    .subscribe(blog => this.blog = blog);
  }

}
