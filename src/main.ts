import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SearchBookComponent } from './search-book/search-book.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,SearchBookComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <app-search-book></app-search-book>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
