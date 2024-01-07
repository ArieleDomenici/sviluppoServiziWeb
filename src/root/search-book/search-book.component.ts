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
  imports: [CommonModule, FormsModule, FoundBookComponent],
  //sembra che anche senza providers vada uguale quindi a che serve?
  //providers: [ArchiveAccessService],
})
export class SearchBookComponent implements OnInit {
  inputedBook: string = '';
  numberBooksFound: number = 0;
  receivedArchive: Book[] = [];
  titoloLibro: string = "";
  autoreLibro: string = "";
  posizioneLibro: string = "";
  bookFound: Array<Book> = [];
  getArchive(): void {
    this.aas.getarchive().subscribe((x) => (this.receivedArchive = x));
    console.log(this.receivedArchive);
    let regex = new RegExp(this.inputedBook, "i");
    this.numberBooksFound = this.receivedArchive.filter(
      (el) => regex.test(el.titolo)
    ).length;
    if (this.numberBooksFound == 1){
      this.bookFound = this.receivedArchive.filter((el) => regex.test(el.titolo))
    }
  }
  constructor(private aas: ArchiveAccessService) {}
  ngOnInit() {}
}
