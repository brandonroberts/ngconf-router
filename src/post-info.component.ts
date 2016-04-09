import {Component, Input} from 'angular2/core';

@Component({
  selector: 'post-info',
  template: `
    <div class="page-header">
      <h2>{{ post.title }}</h2>
    </div>

    {{ post.content }}
  `
})
export class PostInfoComponent {
  @Input() post;
}
