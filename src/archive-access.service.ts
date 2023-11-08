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

}