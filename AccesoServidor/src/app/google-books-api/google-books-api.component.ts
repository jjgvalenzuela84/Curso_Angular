import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-google-books-api',
  templateUrl: './google-books-api.component.html',
  styleUrls: ['./google-books-api.component.css']
})
export class GoogleBooksApiComponent implements OnInit {

  public libro = [];
  public aTitulos = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  buscar() {
    console.log(this.libro);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.libro;

    this.http.get(url).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          this.aTitulos.push(bookTitle);
        }
        console.log(this.aTitulos);
      },
      error => console.error(error)
    );
  }

}
