import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestService } from '../rest/rest.service';
import { Constant } from '../../constant/constants';
import { Author } from '../../model/author';

@Injectable()
export class AuthorService extends RestService {

  baseUrl = Constant.BASE_URL;

  constructor(private _http: Http) {
    super(_http);
  }

  public getAuthor() {
    const currentURL = this.baseUrl.concat('authors');
    return this.get(currentURL);
  }

  public getAuthorWithParam(authors: string): Observable<Author> {
    const getAuthorURL = this.baseUrl.concat('authors/' + authors);
    return this.get(getAuthorURL);
  }

  public deleteAuthor(authors: string): Observable<Author> {
    const deleteAuthorURL = this.baseUrl.concat('authors');
    return this.deleteServiceWithId(deleteAuthorURL, 'id', authors);
  }

  public updateAuthor(authors: Author): Observable<Author> {
    const saveAuthorUrl = this.baseUrl.concat('authors');
    return this.post(saveAuthorUrl, authors);
  }

  public saveEditAuthor(authors: Author): Observable<Author> {
    const saveAuthorUrl = this.baseUrl.concat('authors/' + authors.id);
    return this.put(saveAuthorUrl, authors);
  }

}
