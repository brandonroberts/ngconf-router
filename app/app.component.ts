import {Component} from 'angular2/core';


import {Home} from './home.component';
import {BlogPosts} from './posts.component';
import {Login} from './login.component';
import {Admin} from './admin.component';

@Component({
  selector: 'my-app',
  directives: [  ],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Posts</a>
          </li>
          <li>
            <a>Admin</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="page-header">
      <h2>My Blog</h2>
    </div>
  `
})
export class App{}
