import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './Services/blog.service';
import { AppRoutingModule } from './/app-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CommonModule } from '@angular/common';
import { limitParagraph } from './pipe/limitParagraph.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from 'src/app/services/user.service';
import { AuthorProfileComponent } from './author-profile/author-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailsComponent,
    limitParagraph,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    CreateBlogComponent,
    UserProfileComponent,
    AuthorProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  ],
  providers: [BlogService,AuthenticationService,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
