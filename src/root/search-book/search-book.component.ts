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
  //testo che viene scritto nella casella di ricerca
  inputedBook: string = '';
  numberBooksFound: number = 0;
  receivedArchive: any;
  titoloLibro: string = '';
  autoreLibro: string = '';
  posizioneLibro: string = '';
  //questo sarà pieno solo quando viene trovato un singolo libro nella ricerca
  bookFound: Array<Book> = [];
  /*metodo che viene chiamato ogni volta che viene inserito un nuovo carattere nella casella di ricerca. scarica l'archivio fa una ricerca e da il numero di libri trovati o il singolo libro se è uno solo quello trovato. forse ha bisogno di un pò di refactoring fa un pò troppe cose.*/
  cercaLibro(): void {
    /*let responseJson;
    this.aas.getArchive().subscribe((x) => (responseJson = x.response));
    console.log(responseJson);*/
    this.aas.getArchive().subscribe({
      next(x) {
        console.log('got value ' + x[0].titolo);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    /*this.receivedArchive = this.aas.getArchive();
    console.log(this.receivedArchive[0].titolo);
    let regex = new RegExp(this.inputedBook, "i");
    this.numberBooksFound = this.receivedArchive.filter(
      (el: any) => regex.test(el.titolo)
    ).length;
    if (this.numberBooksFound == 1){
      this.bookFound = this.receivedArchive.filter((el: any) => regex.test(el.titolo))
      this.autoreLibro = this.bookFound[0].autore;
      this.titoloLibro = this.bookFound[0].titolo;
      //this.posizioneLibro = this.bookFound[0].id;
    }*/
  }
  constructor(private aas: ArchiveAccessService) {}
  ngOnInit() {}
}
