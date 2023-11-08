export class Book {
  id: number;
  autore: string;
  titolo: string;
  utente: string;
  constructor(id: number, autore: string, titolo: string, utente: string){
    this.id=id;
    this.autore=autore;
    this.titolo=titolo;
    this.utente=utente;
  }
}