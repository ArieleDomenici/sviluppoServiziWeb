import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';
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
  inputedPosition = '';
  inputedTitle = '';
  inputedAuthor = '';

  observable = new Observable((subscriber) => {
    subscriber.next(new Book(this.inputedPosition, this.inputedAuthor, this.inputedTitle, ''));
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  onClick(){
    this.observable.subscribe(value => console.log(value));
  }

  onSubmit(position: string, title: string, author: string) {
    console.log(position + title + author);
  }
  constructor(archiveAccessService: ArchiveAccessService) {}

  ngOnInit() {}
}
