import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule
  ],
  exports: [
    CommonModule, PrincipalComponent, HijoComponent
  ],
  declarations: [PrincipalComponent, HijoComponent]
})
export class PrincipalModule { }
