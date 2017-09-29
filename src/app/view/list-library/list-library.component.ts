import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../../service/library/library.service';
import { Author } from '../../model/author';
import { BookService } from '../../service/book/book.service';
import { Book } from '../../model/book';
import { Library } from '../../model/library';
import { PagenateComponent } from '../../component/pagenate/pagenate.component';
import { PageService } from '../../service/pagenate/page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-library',
  templateUrl: './list-library.component.html',
  styleUrls: ['./list-library.component.css']
})
export class ListLibraryComponent extends PagenateComponent implements OnInit {

  authors: Author[] = new Array();
  books: Book[] = new Array();
  library: Library[] = new Array();
  libraryFilter: any = { title: '' };

  hasdata: boolean;

  constructor(
    private router: Router,
    private servicePage: PageService,
    private serviceBook: BookService,
    private serviceAuthor: LibraryService) {
    super(servicePage);
  }

  ngOnInit() {
    this.hasdata = false;
    this.libraryAuthor();
  }

  reload() {
    this.router.navigate(['listLibrary']);
  }

  getBooksAuthors() {
    this.serviceBook.getBook().subscribe(
      success => {
        this.books = success;
      },
      error => <any>error
    );
  }

  getAuthorsLibrary() {
    this.serviceAuthor.getAuthor().subscribe(
      success => {
        this.authors = success;
      },
      error => <any>error);
  }

  libraryAuthor() {
    this.serviceBook.getBook().subscribe(
      success => {
        this.books = success;
        this.serviceAuthor.getAuthor().subscribe(
          success1 => {
            this.authors = success1;
            this.books.forEach(book => {
              const libraryItem = new Library();
              libraryItem.id = book.id;
              libraryItem.title = book.title;

              this.authors.forEach(author => {
                if (book.authorId === author.id) {
                  libraryItem.author = author.firstName + ' ' + author.lastName;
                }
              });
              this.library.push(libraryItem);
              this.allItems = this.library;
              this.setPage(1);
            });
          },
          error => <any>error);
      },
      error => <any>error
    );

  }
}
