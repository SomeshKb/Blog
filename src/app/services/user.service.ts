import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/blog';
import { UserDetails } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUserLikesCount(userID:string):Observable<JSON>{
    const url="api/user/likes/"+userID;
    return this.http.get<JSON>(url);
  }

  getAuthorName(userID:string):Observable<string>{
    const url="api/authorName/"+userID;
    return this.http.get<string>(url);
  }

  getUserBlogs(userID:string):Observable<Blog[]>{
    const url="api/user/blog/"+userID;
    return this.http.get<Blog[]>(url);
  }

  getAuthorDetails(userID:string):Observable<UserDetails>{
    const url="api/authorName/"+userID;
    return this.http.get<UserDetails>(url);
  }


}