import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { ArchiveAccessService } from '../archive-access.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AddBookComponent implements OnInit {
  inputedPosition: string = '';
  inputedTitle: string = '';
  inputedAuthor: string = '';

  onClick() {
    let book = new Book(
      this.inputedPosition,
      this.inputedAuthor,
      this.inputedTitle,
      ''
    );
    this.archiveAccessService.getArchive().subscribe((arrayOfBooks) => {
      arrayOfBooks.push(book);
      this.archiveAccessService
        .addBookToArchive(arrayOfBooks)
        .subscribe((x) => console.log(x));
    });
  }

  constructor(private archiveAccessService: ArchiveAccessService) {}

  ngOnInit() {}
}
