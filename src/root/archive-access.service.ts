import { Injectable } from '@angular/core';
//import { AddBookComponent } from './add-book/add-book.component';
import { Book } from './book';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArchiveAccessService {
  books: Array<Book> = [
    new Book('1', 'Dante Alighieri', 'La Divina Commedia', ''),
    new Book('2', 'Alessandro Manzoni', 'I Promessi Sposi', ''),
    new Book('3', 'Il Principe', 'Nicolò Machiavelli', ''),
  ]
  constructor(/*private addBookComponent: AddBookComponent*/) { }
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  getarchive(): Array<Book>{
    return this.books;
  }

  //questo dovrà essere il metodo per caricare il nuovo array coi cambiamenti
  //non so cosa dovrebbe passargli penso di nuovo una stringa json?
  postarchive(position: string, author: string, title: string) {
    this.books.push(new Book(position, author, title, ''));
    console.log(this.books);
  }
  cercaLibro(autore: string, titolo: string) {
    console.log(`Autore e titolo cercati sono: autore: ${autore}, titolo: ${titolo}.`);
  }
}