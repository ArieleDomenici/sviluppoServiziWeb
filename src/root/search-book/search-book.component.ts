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
  inputedUser: string = '';
  inputedBook: string = '';
  numberBooksFound: number = 0;
  receivedArchive: any;
  titoloLibro: string = '';
  autoreLibro: string = '';
  posizioneLibro: string = '';
  utenteLibro: string = '';
  //questo sarà pieno solo quando viene trovato un singolo libro nella ricerca
  bookFound: Array<Book> = [];
  /*metodo che viene chiamato ogni volta che viene inserito un nuovo carattere nella casella di ricerca. scarica l'archivio fa una ricerca e da il numero di libri trovati o il singolo libro se è uno solo quello trovato. forse ha bisogno di un pò di refactoring fa un pò troppe cose.*/

  cercaLibro(): void {
    let regex = new RegExp(this.inputedBook, 'i');
    this.aas.getArchive().subscribe((x) => {
      this.receivedArchive = x;
      let regex = new RegExp(this.inputedBook, 'i');
      this.numberBooksFound = this.receivedArchive.filter((el: any) =>
        regex.test(el.titolo + el.autore)
      ).length;
      if (this.numberBooksFound == 1) {
        this.bookFound = this.receivedArchive.filter((el: any) =>
          regex.test(el.titolo + el.autore)
        );
        this.autoreLibro = this.bookFound[0].autore;
        this.titoloLibro = this.bookFound[0].titolo;
        this.posizioneLibro = this.bookFound[0].id;
        this.utenteLibro = this.bookFound[0].utente;
      }
    });
  }
  prestito(user: string) {
    this.bookFound[0].utente = user;
    this.inputedUser = user
    //qui devo usare map
    console.log(this.titoloLibro);
    this.aas.addBookToArchive(this.receivedArchive?.map(this.addUtente, this)).subscribe();
  }
  addUtente(book: any){
    if(book.titolo==this.titoloLibro){
      return book.utente=this.inputedUser;
    }
    else{
      return book;
    }
  }


  receiveUser(user: string) {
    this.inputedUser = user;
  }

  constructor(private aas: ArchiveAccessService) {}
  ngOnInit() {}
}
