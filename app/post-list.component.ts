import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'posts-list',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let post of (posts | async)">
        <a [routerLink]="['./posts', post.id]">{{ post.title }}</a>
      </li>
    </ul>
  `
})
export class PostListComponent implements OnInit {
  posts: any;

  constructor(public ps: PostService) {}

  ngOnInit() {
    this.posts = this.ps.getPosts();
  }
}
