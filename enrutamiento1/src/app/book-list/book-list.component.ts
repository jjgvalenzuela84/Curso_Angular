import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public libros = [{id: 1, nombre: 'Libro1'},
  {id: 2, nombre: 'Libro2'},
  {id: 3, nombre: 'Libro3'},
  {id: 4, nombre: 'Libro4'}];

constructor() {
}

  ngOnInit() {
  }

}
