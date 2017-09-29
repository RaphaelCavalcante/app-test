import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../../service/book/book.service';
import { Book } from '../../../model/book';
import { PagenateComponent } from '../../../component/pagenate/pagenate.component';
import { PageService } from '../../../service/pagenate/page.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent extends PagenateComponent implements OnInit {

  books: Book[] = new Array();

  constructor(
    pageService: PageService,
    private bookService: BookService,
    private router: Router) {
      super(pageService);
     }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getBook().subscribe(
      success => {
        this.books = success;
        this.allItems = this.books;
        this.setPage(1);
      },
      error => <any>error);
  }

  deleteAuthor(bookId: number) {
    this.bookService.deleteBook(bookId.toString()).subscribe(
      success => {
        this.getBook();
      },
      error => <any>error
    );
  }

  editBook(books: Book) {
    this.router.navigate(['listBook/book', books.id.toString()]);
  }

  newBook(): void {
    this.router.navigate(['listBook/book']);
  }

}
