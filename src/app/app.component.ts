import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <jumbotron></jumbotron>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
