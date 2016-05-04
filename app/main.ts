import 'rxjs/add/operator/map';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {LocationStrategy,
        HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {
      useClass: HashLocationStrategy })
]);
