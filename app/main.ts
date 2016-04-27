import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app.component';

import {PostService} from './post.service';
import {Auth} from './auth.service';

import 'rxjs/Rx';

bootstrap(App, [
  Auth,
  PostService,
  HTTP_PROVIDERS
]);
