import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../../service/library/library.service';
import { Author } from '../../model/author';


@Component({
  selector: 'app-list-library',
  templateUrl: './list-library.component.html',
  styleUrls: ['./list-library.component.css']
})
export class ListLibraryComponent implements OnInit {

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
