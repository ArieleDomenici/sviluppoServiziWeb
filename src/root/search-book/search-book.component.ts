import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoundBookComponent } from './found-book/found-book.component';
import { ArchiveAccessService } from '../archive-access.service';


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
  inputedBook = '';
  searchBook(bookName : string){
    this.aas.getarchive();
    console.log(bookName);
    
  }
  constructor(private aas: ArchiveAccessService) { }
  
  ngOnInit() {
  }
}