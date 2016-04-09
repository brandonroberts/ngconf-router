import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'blog-admin-home',
  directives: [ ],
  template: `
    Welcome Admin!
    <br><br>

    {{ message }}
  `
})
export class AdminHome implements OnInit {
  message: string;

  constructor() {}

  ngOnInit() {

  }
}
