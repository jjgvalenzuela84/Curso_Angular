import { Injectable } from '@angular/core';

@Injectable()
export class GetLibrosService {

  constructor() { }

  getLibros() {
    return ['Libro1', 'Libro2'];
  }

}
