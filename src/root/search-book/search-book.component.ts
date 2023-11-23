import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  standalone: true,
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SearchBookComponent implements OnInit {
  favoriteColor = '';
  searchBook(bookName : string){
    console.log(bookName);
  }
  constructor() { }

  ngOnInit() {
  }
}