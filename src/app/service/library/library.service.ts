import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestService } from '../rest/rest.service';
import { Constant } from '../../constant/constants';
import { Author } from '../../model/author';

@Injectable()
export class LibraryService extends RestService {

  baseUrl = Constant.BASE_URL;

  constructor(private _http: Http) {
    super(_http);
  }

  public getAuthor() {
    const currentURL = this.baseUrl.concat('authors');
    return this.get(currentURL);
  }

}
