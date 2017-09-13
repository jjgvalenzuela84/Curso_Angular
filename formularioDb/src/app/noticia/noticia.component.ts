import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  public textoBoton; string;
  public noticiaFull: boolean;
  constructor() { }

  ngOnInit() {
    this.textoBoton = 'Mostrar noticia';
    this.noticiaFull = false;
  }
  cambiaVista() {
    this.noticiaFull = !this.noticiaFull;
    if (this.noticiaFull)  {
      this.textoBoton = 'Ocultar noticia';
    }else {
      this.textoBoton = 'Mostrar noticia';
    }
  }

}
