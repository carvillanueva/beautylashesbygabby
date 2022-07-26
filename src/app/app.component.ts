import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
  `],
  template: `
    <main-header></main-header>
    <router-outlet></router-outlet>
    <toTheTop></toTheTop>
    <main-footer></main-footer>

  `
})
export class AppComponent {
  title = 'beautylashesbygabby';
}
