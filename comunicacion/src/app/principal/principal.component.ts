import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public aLista;
  public textoInput:String;

  constructor() { }

  ngOnInit() { 
    this.aLista = [];
    
  }

  add() {
    this.aLista.push({desc:this.textoInput, checked:false});
    console.log(this.aLista);
  }

  del(elem) {    
    var index = this.aLista.indexOf(elem);
    if (index > -1) {
      this.aLista.splice(index, 1);
   }
  }

}
