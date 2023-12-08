import { Injectable } from '@angular/core';
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
  constructor() { }
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  getarchive(): Array<Book>{
    return this.books;
  }
  /*observable = new Observable((subscriber) => {
    subscriber.next(new Book(this.inputedPosition, this.inputedAuthor, this.inputedTitle, ''));
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });*/
  //questo dovrà essere il metodo per caricare il nuovo array coi cambiamenti
  //non so cosa dovrebbe passargli penso di nuovo una stringa json?
  postarchive(): void{

  }
  cercaLibro(autore: string, titolo: string) {
    console.log(`Autore e titolo cercati sono: autore: ${autore}, titolo: ${titolo}.`);
  }
}