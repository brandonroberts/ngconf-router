import {Component} from '@angular/core';
import {PostService} from './post.service';
import {PostInfoComponent} from './post-info.component';
import {Router} from '@angular/router';

@Component({
  selector: 'blog-post',
  directives: [PostInfoComponent],
  template: `
    <post-info [post]="post" *ngIf="post"></post-info>

    <div *ngIf="!post">
      Loading...
    </div>

    <br><br>

    <button (click)="goToPosts()">Back to Posts</button>
  `,
})
export class BlogPostComponent {
  post: any;

  constructor(public ps: PostService, public router: Router) {}

  getPost(id: number) {
    this.ps.getPost(id)
      .subscribe((post) => {
        this.post = post;
      });
  }

  goToPosts() {
    this.router.navigate(['/blog']);
  }
}
