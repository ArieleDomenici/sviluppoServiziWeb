import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-found-book',
  templateUrl: './found-book.component.html',
  styleUrls: ['./found-book.component.css'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class FoundBookComponent implements OnInit {
  @Input() inputedBook : string = "";
  constructor() { }

  ngOnInit() {
  }
}