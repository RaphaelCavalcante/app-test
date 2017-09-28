import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../../service/book/book.service';
import { Book } from '../../../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book[] = new Array();

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getBook().subscribe(
      success => {
        this.books = success;
        console.log(this.books);
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
