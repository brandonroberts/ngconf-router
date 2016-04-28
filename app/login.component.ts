import {Component} from '@angular/core';
import {AuthService} from './auth.service';


@Component({
  selector: 'login',
  template: `
    <div class="page-header">
      <h2>Login</h2>
    </div>

    <form #f (submit)="login()" *ngIf="!auth.loggedIn">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-default">Login</button>
    </form>

    <div *ngIf="auth.loggedIn">
      You are logged in.
      <br><br>
      <button (click)="logout()">Logout</button>
    </div>
  `
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
