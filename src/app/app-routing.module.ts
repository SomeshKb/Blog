import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateBlogComponent } from 'src/app/create-blog/create-blog.component';
import { UserDetails } from './model/User';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent,canActivate: [AuthGuardService]  },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog/:id', component: BlogDetailsComponent,canActivate: [AuthGuardService]},
  { path: 'create', component: CreateBlogComponent ,canActivate: [AuthGuardService]},
  { path: 'profile', component: UserProfileComponent ,canActivate: [AuthGuardService]},
  { path: 'blog/*', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
