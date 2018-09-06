import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BlogService } from 'src/app/blog.service';
import { AppRoutingModule } from './/app-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CommonModule } from '@angular/common';
import { limitParagraph } from 'src/app/limitParagraph.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailsComponent,
    limitParagraph,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    AppRoutingModule  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
