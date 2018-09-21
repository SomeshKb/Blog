import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { CreateBlogComponent } from 'src/app/create-blog/create-blog.component';
import { AuthGuardService } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent,canActivate: [AuthGuardService]  },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'create', component: CreateBlogComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
