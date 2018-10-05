import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog, Comments } from '../model/blog';
import { UserDetails } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = 'api/blog';


  constructor(private http: HttpClient) { }

  //  GET blogs from the server 
  getBlogs (): Observable<Blog[]> {
    const url :string= this.blogUrl+"/all";
    return this.http.get<Blog[]>(url);
  }

  // GET blog using id from server
  getBlog(id: string): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  // UPDATE like of a blog 
  updateLike(updateBlog: Blog,user:UserDetails){
    const url =this.blogUrl+"/update/likes/"+updateBlog._id;
    return this.http.put(url,user);
  }

  // CREATE blog    
  createBlog(blog:Blog){
    const url=this.blogUrl+"/create";
    return this.http.post(url,blog);
  }

  // DELETE Blog from Server
  removeBlog(blog:Blog){
    const url=this.blogUrl+"/remove/"+blog._id;
    return this.http.delete(url);
  }

  // ADD Comments on the Blog
  addComments(blogID:string,comments:Comments){
    const url = this.blogUrl+"/update/comments/"+blogID;
    console.log(url);
    return this.http.put(url,comments)
  }


}
