import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';

@Component({
  selector: 'blog-posts',
  directives: [ ],
  template: `
    <div class="page-header">
      <h2>Blog Posts</h2>
    </div>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="var post of (posts | async)">
        <a>{{ post.title }}</a>
      </li>
    </ul>
  `
})
export class BlogPosts implements OnInit {
  posts: any;
  
  constructor(public ps: PostService) {}

  ngOnInit() {
    this.posts = this.ps.getPosts();
  }
}
