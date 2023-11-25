import { Component, OnInit, VERSION } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SearchBookComponent } from './search-book/search-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, SearchBookComponent],
})
export class RootComponent implements OnInit {
  title: string = 'Angular ' + VERSION.major;
  constructor() { }

  ngOnInit() {
  }

}