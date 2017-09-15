import { GetLibrosService } from './../get-libros/get-libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public aLista;
  public textoInput: String;
  public libroBucar: String;
  public libros = [];

  constructor(private getLibrosService: GetLibrosService) { }

  ngOnInit() {
    this.aLista = [];
  }

  add() {
    this.aLista.push({desc: this.textoInput, checked: false});
    console.log(this.aLista);
  }

  del(elem) {
    const index = this.aLista.indexOf(elem);
    if (index > -1) {
      this.aLista.splice(index, 1);
   }


  }

  verLibros() {
    console.log(this.libroBucar);
    this.libros = this.getLibrosService.getLibros();
   }
}
