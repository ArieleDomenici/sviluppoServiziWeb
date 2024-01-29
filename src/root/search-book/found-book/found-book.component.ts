import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-found-book',
  templateUrl: './found-book.component.html',
  styleUrls: ['./found-book.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FoundBookComponent implements OnInit {
  @Input() inputedBook: string = '';
  @Input() numberBooksFound: number = 0;
  @Input() bookFound: Array<any> = [];
  @Input() autoreLibro?: string;
  @Input() titoloLibro?: string;
  @Input() posizioneLibro?: string;
  @Input() receivedArchive?: Array<any>;
  @Input() utenteLibro?: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  emitUser(value: string) {
    this.newItemEvent.emit(value);
  }
  /*addUtente(book: any) {
    if (book.titolo == this.titoloLibro) {
      return (book.utente = this.inputedUser);
    } else {
      return book;
    }
  }*/
  constructor() {}

  ngOnInit() {}
}
