import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public elemento;
  @Output()
  public evento = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  quitar(elem) { 
   // console.log(elem);
    this.evento.emit(elem)
  }

}
