import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleBooksApiComponent } from './google-books-api/google-books-api.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleBooksApiComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
