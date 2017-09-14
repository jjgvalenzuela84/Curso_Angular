import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementoComponent } from './elemento/elemento.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    ElementoComponent
  ],
  declarations: [ElementoComponent, ListaComponent]
})
export class ListaModule { }
