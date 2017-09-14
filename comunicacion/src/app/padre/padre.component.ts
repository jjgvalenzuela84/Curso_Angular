import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public titleHijo = 'TITULO HIJO';
  public visible = 'true';
  
  constructor() { }

  ngOnInit() {
  }

  hiddenTitle(p) {
    this.visible = p;
  }

}
