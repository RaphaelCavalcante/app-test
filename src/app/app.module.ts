import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule, ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.router';

import { ListLibraryComponent } from './view/list-library/list-library.component';
import { AddEditBookComponent } from './view/books/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './view/author/add-edit-author/add-edit-author.component';
import { ListAuthorComponent } from './view/author/list-author/list-author.component';
import { ListBookComponent } from './view/books/list-book/list-book.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { RestService } from './service/rest/rest.service';
import { LibraryService } from './service/library/library.service';
import { AuthorService } from './service/author/author.service';
import { BookService } from './service/book/book.service';


export function httpFactory(backend: ConnectionBackend, defaultOptions: RequestOptions, router: Router) {}

@NgModule({
  declarations: [
    AppComponent,
    ListLibraryComponent,
    AddEditBookComponent,
    AddEditAuthorComponent,
    ListAuthorComponent,
    ListBookComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    RestService,
    LibraryService,
    AuthorService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
