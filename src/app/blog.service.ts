import { Injectable } from '@angular/core';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './blog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = 'api/blogs';

  constructor(private http: HttpClient) { }

/** GET blogs from the server */
getBlogs (): Observable<Blog[]> {
  return this.http.get<Blog[]>(this.blogUrl);
}

getHero(id: number): Observable<Blog> {
  const url = `${this.blogUrl}/${id}`;
  return this.http.get<Blog>(url);
}


}

