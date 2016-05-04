import {Component} from '@angular/core';
import {PostListComponent} from './post-list.component';
import {BlogPostComponent} from './post.component';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'blog-posts',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="page-header">
      <h2>Blog Posts</h2>
    </div>

    <router-outlet></router-outlet>
  `
})
@Routes([
  {
    path: '/',
    component: PostListComponent
  },
  {
    path: '/posts/:id',
    component: BlogPostComponent
  }
])
export class BlogPostsComponent {}
