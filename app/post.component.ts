import {Component} from '@angular/core';
import {PostService} from './post.service';
import {PostInfoComponent} from './post-info.component';
import {Router, OnActivate, RouteSegment, RouteTree, CanDeactivate} from '@angular/router';

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
export class BlogPostComponent implements OnActivate, CanDeactivate {
  post: any;

  constructor(public ps: PostService, public router: Router) {}

  routerOnActivate(
    curr: RouteSegment,
    prev?: RouteSegment,
    currTree?: RouteTree,
    prevTree?: RouteTree
  ) {
    let id = + curr.getParam('id');
    this.getPost(id);
  }

  getPost(id: number) {
    this.ps.getPost(id)
      .subscribe((post) => {
        this.post = post;
      });
  }

  goToPosts() {
    this.router.navigate(['/blog']);
  }

  routerCanDeactivate(curr: RouteTree, prev: RouteTree) {
    return Promise.resolve(window.confirm('Are you sure?'));
  }
}
