import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule, ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { ListLibraryComponent } from './view/list-library/list-library.component';
import { AddEditBookComponent } from './view/books/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './view/author/add-edit-author/add-edit-author.component';
import { ListAuthorComponent } from './view/author/list-author/list-author.component';
import { ListBookComponent } from './view/books/list-book/list-book.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PagenateComponent } from './component/pagenate/pagenate.component';

import { RestService } from './service/rest/rest.service';
import { LibraryService } from './service/library/library.service';
import { AuthorService } from './service/author/author.service';
import { BookService } from './service/book/book.service';
import { PageService } from './service/pagenate/page.service';
import { ToastService } from './service/toast-notification/toast.service';

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
    NavbarComponent,
    PagenateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    Ng2FilterPipeModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    RestService,
    LibraryService,
    AuthorService,
    BookService,
    PageService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
