import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class PostService {
  constructor(private http: Http) {}

  getPost(id: number) {
    return this.getPosts()
      .map(posts => posts.find(post => post.id === id));
  }

  getPosts() {
    return this.http.get('./posts.json')
      .map(res => res.json())
      .map(res => res.posts);
  }
}
