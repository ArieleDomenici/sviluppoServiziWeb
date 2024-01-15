import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Subscriber, Observer, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ajax, AjaxResponse } from 'rxjs/ajax';


@Injectable({
  providedIn: 'root',
})
export class ArchiveAccessService {
  base = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  op = 'get';
  key = 'ae057acf';
  URL = this.base + '/' + this.op + '?key=' + this.key;
  //array di libri dichiarato dentro il service che poi andrà spostato sul database e gestito con le api rest
  books: Array<Book> = [
    new Book('1', 'Dante Alighieri', 'La Divina Commedia', ''),
    new Book('2', 'Alessandro Manzoni', 'I Promessi Sposi', ''),
    new Book('3', 'Nicolò Machiavelli', 'Il Principe', ''),
  ]
  constructor() { }
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  //al momento funziona usando of che genera un observable e poi lo restituisce
  getArchive(){
    const obs = ajax(this.URL);
    return obs; 
  }
  //questo dovrà essere il metodo per caricare il nuovo array coi cambiamenti
  //non so cosa dovrebbe passargli penso di nuovo una stringa json?
  //al momento funziona facendo un subscribe a getarchive e poi con la next esegue un push del nuovo book che riceve come argomento dentro l'array che riceve dall'observable
  addBookToArchive(book: Book) {
    //this.getArchive().subscribe((x)=>(x.push(book)));
    console.log(this.books)
  }
  postArchive(archive: Array<Book>){
    this.books = archive;
  }
  //non mi ricordo cos'è o perchè ho scritto questa cosa
  cercaLibro(autore: string, titolo: string) {
    console.log(`Autore e titolo cercati sono: autore: ${autore}, titolo: ${titolo}.`);
  }
}