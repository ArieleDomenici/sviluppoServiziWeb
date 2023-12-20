import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Subscriber, Observer, of } from 'rxjs';


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
  getString():Observable<string>{
    const testStr = of("testString");
    return testStr;
  }
  sequenceSubscriber(observer: Observer<string>) {
    // synchronously deliver 1, 2, and 3, then completes
    //observer.next(this.books);
    observer.next("refsfr");
    observer.complete();
    // Return the unsubscribe function.
    // This one doesn't do anything
    // because values are delivered synchronously
    // and there is nothing to clean up.
    return {unsubscribe() {}};  
  }
  sequence = new Observable(this.sequenceSubscriber);
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  getarchive(): void{
    this.sequence.subscribe({
      next(num) { return num; 
      },
      complete() { console.log('Finished sequence'); 
    }
    });
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