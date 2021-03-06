import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Blog } from '../model/blog';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = 'api/blog';
  
  constructor(private http: HttpClient) { }

  /** GET blogs from the server */
  getBlogs (): Observable<Blog[]> {
    const url :string= this.blogUrl+"/all";
    return this.http.get<Blog[]>(url);
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;``
    return this.http.get<Blog>(url);
  }

  postLike(updateBlog: Blog){
    const url =this.blogUrl+"/like/"+updateBlog.id;
    console.log(url);
    return this.http.post(url,updateBlog);
  }

  createUser(user:User){
    const url =this.blogUrl+"/register";
    console.log(url);
    return this.http.post(url,user);
  }

  login(user:User){
    const url =this.blogUrl+"/login";
    return this.http.post(url,user);
  }

}
