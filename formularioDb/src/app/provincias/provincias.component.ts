import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  public aImpresoras = [
    {id: 1, nombre: 'HP DESKTYET'},
    {id: 2, nombre: 'EPSON'},
    {id: 3, nombre: 'OTRA'}
  ];
  public aProvincias = [
    {id: 1, nombre: 'MADRID'},
    {id: 2, nombre: 'BARCELONA'},
    {id: 3, nombre: 'VALENCIA'}
  ];

  public impresoraSel: string;
  public tipoImprSel1: boolean;
  public tipoImprSel2: boolean;
  public provSel = {};


  constructor() { }

  ngOnInit() {  }

}
