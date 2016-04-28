import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {PostService} from './post.service';
import {AuthService} from './auth.service';

import {HomeComponent} from './home.component';
import {BlogPostsComponent} from './blog-posts.component';

@Component({
  selector: 'my-app',
  providers: [
    AuthService,
    PostService,
    HTTP_PROVIDERS
  ],
  directives: [],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Posts</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="page-header">
      <h2>My Blog</h2>
    </div>
  `
})
export class AppComponent{}
