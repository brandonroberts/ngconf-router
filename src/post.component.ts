import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {PostInfoComponent} from './post-info.component';


@Component({
  selector: 'blog-post',
  directives: [ PostInfoComponent ],
  template: `
    <post-info [post]="post" *ngIf="post"></post-info>

    <div *ngIf="!post">
      Loading...
    </div>

    <br><br>

    <button (click)="goToPosts()">Back to Posts</button>
  `,
})
export class BlogPost implements OnInit {
  post: any;

  constructor(public ps: PostService) {}

  ngOnInit() {
    let id =+ 0;
    this.ps.getPost(id)
      .subscribe((post) => {
        this.post = post;
      });
  }

  goToPosts() {

  }
}
