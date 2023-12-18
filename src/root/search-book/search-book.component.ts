import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoundBookComponent } from './found-book/found-book.component';
import { ArchiveAccessService } from '../archive-access.service';
import { Book } from '../book';


@Component({
  selector: 'app-search-book',
  standalone: true,
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    FoundBookComponent
  ],
  providers: [ArchiveAccessService],

})
export class SearchBookComponent implements OnInit {
  inputedBook: string = '';
  receivedArchive : Array<Book> = [];
  searchBook(bookName : string){
    console.log(this.receivedArchive)
    this.aas.sequence.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    })
    this.inputedBook = bookName;
    console.log(this.receivedArchive);
    //setTimeout(()=>{console.log(this.receivedArchive);},3000);
    
  }
  constructor(private aas: ArchiveAccessService) { }
  
  ngOnInit() {
  }
}

