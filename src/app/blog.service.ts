import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './blog';
import { Observable, of } from 'rxjs';


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

  getHero(id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url);
  }
}

