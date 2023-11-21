import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  standalone: true,
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class SearchBookComponent implements OnInit {
  applyForm = new FormGroup({
    autore: new FormControl(''),
    titolo: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
}