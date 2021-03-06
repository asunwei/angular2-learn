import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import {AppComponent} from './app.component';
import {BookService} from './book.service';

@NgModule({
  imports:      [BrowserModule, HttpModule],
  declarations: [AppComponent ],
  providers: [BookService],
  bootstrap:    [AppComponent],
     
})
export class AppModule { }
