import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class ArchiveAccessService {
  base =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  basePOST =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  op = 'get';
  opPOST = 'set';
  key = 'ae057acf';
  urlToGetArchive = this.base + '/' + this.op + '?key=' + this.key;
  urlToPostArchive = this.base + '/' + this.opPOST + '?key=' + this.key;

  constructor() {}
  getArchive() {
    const obs: Observable<any> = new Observable((subscriber) => {
      fetch(this.urlToGetArchive)
        .then(
          (response) => response.json(),
          (error) => alert(error)
        )
        .then((data) => {
          subscriber.next(JSON.parse(data));
        });
    });
    return obs;
  }

  addBookToArchive(arrayofBooks: Book[]) {
    const obs: Observable<any> = new Observable((subscriber) => {
      fetch(this.urlToPostArchive, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arrayofBooks),
      }).then((response) => subscriber.next(response));
    });
    return obs;
  }
}
