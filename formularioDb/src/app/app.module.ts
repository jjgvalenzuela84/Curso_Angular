import { ComunModule } from './comun/comun.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProvinciasComponent } from './provincias/provincias.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    NoticiaComponent,
    ProvinciasComponent
  ],
  imports: [
    BrowserModule,
    ComunModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
