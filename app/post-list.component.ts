import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {BlogPost} from './post.component';

@Component({
  selector: 'posts-list',
  directives: [ ],
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="var post of (posts | async)">
        <a>{{ post.title }}</a>
      </li>
    </ul>
  `
})
export class PostList implements OnInit {
  posts: any;

  constructor(public ps: PostService) {}

  ngOnInit() {
    this.posts = this.ps.getPosts();
  }
}
