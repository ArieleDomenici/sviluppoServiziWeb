import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Subscriber, Observer, of, interval } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class ArchiveAccessService {
  base =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  op = 'get';
  key = 'ae057acf';
  urlToGetArchive = this.base + '/' + this.op + '?key=' + this.key;

  //array di libri dichiarato dentro il service che poi andrà spostato sul database e gestito con le api rest
  books: Array<Book> = [
    new Book('1', 'Dante Alighieri', 'La Divina Commedia', ''),
    new Book('2', 'Alessandro Manzoni', 'I Promessi Sposi', ''),
    new Book('3', 'Nicolò Machiavelli', 'Il Principe', ''),
  ];
  constructor() {}
  /*codice per andare a prendere l'array dal server. al momento funziona restituendo
  un observable che fa una fetch con una serie di then e parsano il json e poi
  resti */
  getArchive() {
    //const obs: Observable<AjaxResponse<any>> = ajax(this.urlToGetArchive);
    //return obs;
    const obs: Observable<any> = new Observable((subscriber) => {
      fetch(this.urlToGetArchive)
        .then(
          (response) => response.json(), // parsing per avere la stringa
          (error) => alert(error)
        )
        .then((data) => {
          console.log(data);
          subscriber.next(JSON.parse(data)); // parsing per avere l'array
        });
    });
    return obs;
  }
  //questo dovrà essere il metodo per caricare il nuovo array coi cambiamenti
  //non so cosa dovrebbe passargli penso di nuovo una stringa json?
  //al momento funziona facendo un subscribe a getarchive e poi con la next esegue un push del nuovo book che riceve come argomento dentro l'array che riceve dall'observable
  addBookToArchive(book: Book) {
    this.getArchive().subscribe((x) => {
      x.push(book);
      console.log(x);
    });
  }
  postArchive(archive: Array<Book>) {
    this.books = archive;
  }
  //non mi ricordo cos'è o perchè ho scritto questa cosa
  cercaLibro(autore: string, titolo: string) {
    console.log(
      `Autore e titolo cercati sono: autore: ${autore}, titolo: ${titolo}.`
    );
  }
}
