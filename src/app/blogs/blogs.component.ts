import { Component, OnInit, Output } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from 'src/app/blog.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];
  selectedBlog: Blog;

  constructor(private blogService: BlogService) {

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
    console.log(blog);
  }
}
