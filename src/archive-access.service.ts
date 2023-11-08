import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class ArchiveAccessService {
  books: Array<Book> = [
    new Book(1, 'Dante Alighieri', 'La Divina Commedia', ''),
    new Book(2, 'Alessandro Manzoni', 'I Promessi Sposi', ''),
    new Book(3, 'Il Principe', 'Nicolò Machiavelli', ''),
  ]
  constructor() { }
  //questo dovrà essere il metodo per andare a prendere l'array sul server
  //dovrebbe restituire una stringa json credo
  getarchive(): string{
    return "dovrebbe essere la stringa json"
  }
  //questo dovrà essere il metodo per caricare il nuovo array coi cambiamenti
  //non so cosa dovrebbe passargli penso di nuovo una stringa json?
  postarchive(): void{

  }

}