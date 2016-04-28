import {Component} from '@angular/core';
import {AdminHomeComponent} from './admin-home.component';
import {AuthService} from './auth.service';


@Component({
  selector: 'blog-admin',
  directives: [],
  template: `
    <div class="page-header">
      <h2>Admin Panel</h2>
    </div>
  `
})
export class AdminComponent {
  constructor(public auth: AuthService) {}
}
