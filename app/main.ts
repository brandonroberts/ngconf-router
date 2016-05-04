import 'rxjs/add/operator/map';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide,
        ComponentResolver,
        SystemJsComponentResolver} from '@angular/core';
import {LocationStrategy,
        HashLocationStrategy} from '@angular/common';
import {RuntimeCompiler} from '@angular/compiler';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {
      useClass: HashLocationStrategy }),
  provide(ComponentResolver, {
    useFactory: (compiler) => new SystemJsComponentResolver(compiler),
    deps: [RuntimeCompiler]
  })
]);
