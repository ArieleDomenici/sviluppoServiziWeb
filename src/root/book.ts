export class Book {
  id: string;
  autore: string;
  titolo: string;
  utente: string;
  constructor(id: string, autore: string, titolo: string, utente: string){
    this.id=id;
    this.autore=autore;
    this.titolo=titolo;
    this.utente=utente;
  }
}