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
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { AuthGuardService } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailsComponent,
    limitParagraph,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SignupComponent,
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule ,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: ' router'})
   ],
  providers: [BlogService,AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
