import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class AddBookComponent implements OnInit {
  inputedPosition = '';
  inputedTitle = '';
  inputedAuthor = '';

  onSubmit(position: string, title : string, author : string){
    console.log(position + title + author);
  }
  constructor() { }

  ngOnInit() {
  }
}