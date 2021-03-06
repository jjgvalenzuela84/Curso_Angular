import { GetLibrosService } from './get-libros/get-libros.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PrincipalModule
  ],
  providers: [GetLibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
