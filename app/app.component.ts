import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {PostService} from './post.service';

import {HomeComponent} from './home.component';
import {BlogPostsComponent} from './blog-posts.component';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  providers: [
    PostService,
    HTTP_PROVIDERS
  ],
  directives: [ROUTER_DIRECTIVES],
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
      <h2>ngBlog</h2>
    </div>

    <router-outlet></router-outlet>
  `
})
@Routes([
  { path: '/', component: HomeComponent }
])
export class AppComponent {
  constructor(router: Router) {}
}
