import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Blog } from '../model/blog';
import { UserDetails } from '../model/User';


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

  getBlog(id: string): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  updateLike(updateBlog: Blog,user:UserDetails){
    const url =this.blogUrl+"/update/likes/"+updateBlog._id;
    console.log(url);
    return this.http.put(url,user);
  }

}
