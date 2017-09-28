import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../../../service/library/library.service';
import { Author } from '../../../model/author';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  authors: Author[] = new Array();

  constructor(private serviceAuthor: LibraryService) { }

  ngOnInit() {
    this.getAuthorsLibrary();
  }

  getAuthorsLibrary() {
    this.serviceAuthor.getAuthor().subscribe(
      success => {
        this.authors = success;
        console.log(this.authors);
      },
      error => <any>error);
  }
}
