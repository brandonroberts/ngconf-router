import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {PostListComponent} from './post-list.component';
import {BlogPostComponent} from './post.component';

@Component({
  selector: 'blog-posts',
  directives: [],
  template: `
    <div class="page-header">
      <h2>Blog Posts</h2>
    </div>
  `
})
export class BlogPostsComponent {}
