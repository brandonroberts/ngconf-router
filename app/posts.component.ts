import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';


@Component({
  selector: 'blog-posts',
  directives: [ ],
  template: `
    <div class="page-header">
      <h2>Blog Posts</h2>
    </div>
  `
})
export class BlogPosts {}
