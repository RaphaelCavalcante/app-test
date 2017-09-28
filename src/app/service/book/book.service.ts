import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestService } from '../rest/rest.service';
import { Constant } from '../../constant/constants';
import { Book } from '../../model/book';

@Injectable()
export class BookService extends RestService {

  baseUrl = Constant.BASE_URL;

  constructor(private _http: Http) {
    super(_http);
  }

  public getBook() {
    const currentURL = this.baseUrl.concat('books');
    return this.get(currentURL);
  }

  public getBookWithParam(books: string): Observable<Book> {
    const getAuthorURL = this.baseUrl.concat('books/' + books);
    return this.get(getAuthorURL);
  }

  public deleteBook(books: string): Observable<Book> {
    const deleteAuthorURL = this.baseUrl.concat('books');
    return this.deleteServiceWithId(deleteAuthorURL, 'id', books);
  }

  public createBook(books: Book): Observable<Book> {
    const saveAuthorUrl = this.baseUrl.concat('books');
    return this.post(saveAuthorUrl, books);
  }

  public saveEditBook(books: Book): Observable<Book> {
    const saveAuthorUrl = this.baseUrl.concat('books/' + books.id);
    return this.put(saveAuthorUrl, books);
  }

}
