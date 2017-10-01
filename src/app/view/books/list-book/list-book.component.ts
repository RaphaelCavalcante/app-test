import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../../service/book/book.service';
import { Book } from '../../../model/book';
import { PagenateComponent } from '../../../component/pagenate/pagenate.component';
import { PageService } from '../../../service/pagenate/page.service';
import { ToastService } from '../../../service/toast-notification/toast.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent extends PagenateComponent implements OnInit {

  books: Book[] = new Array();
  hasdata: boolean;
  bookFilter: any = { title: '' };

  key = 'name';
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(
    pageService: PageService,
    private toastService: ToastService,
    private bookService: BookService,
    private router: Router) {
      super(pageService);
     }

  ngOnInit() {
    this.hasdata = false;
    this.getBook();
  }

  getBook() {
    this.bookService.getBook().subscribe(
      success => {
        if (success == null) {
          this.hasdata = false;
        }
        this.books = success;
        this.allItems = this.books;
        this.setPage(1);
        this.hasdata = true;
      },
      error => <any>error);
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId.toString()).subscribe(
      success => {
        this.getBook();
        this.toastService.toastSuccess();
      },
      error => this.toastService.toastError()
    );
  }

  editBook(books: Book) {
    this.router.navigate(['listBook/book', books.id.toString()]);
  }

  newBook(): void {
    this.router.navigate(['listBook/book']);
  }

}
