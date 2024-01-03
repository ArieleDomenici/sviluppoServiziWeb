import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Subscriber, Observer, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root',
})
export class ArchiveAccessService {
  books: Array<Book> = [
    new Book('1', 'Dante Alighieri', 'La Divina Commedia', ''),
    new Book('2', 'Alessandro Manzoni', 'I Promessi Sposi', ''),
    new Book('3', 'Nicolò Machiavelli', 'Il Principe', ''),
  ]
  constructor() { }
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  getarchive(): Observable<Array<Book>>{
    const booksArchive = of(this.books);
    return booksArchive;
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