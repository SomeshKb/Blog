import { Component, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogService } from 'src/app/Services/blog.service';
import { EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];
  selectedBlog: Blog;

  constructor(private blogService: BlogService,private auth:AuthenticationService) {

  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
    .subscribe(blogs => this.blogs = blogs);
  }

  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
  }
}
