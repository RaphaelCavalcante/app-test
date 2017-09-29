import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BookService } from '../../../service/book/book.service';
import { Book } from '../../../model/book';
import { AuthorService } from '../../../service/author/author.service';
import { Author } from '../../../model/author';
import { ToastService } from '../../../service/toast-notification/toast.service';


@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit  {

  books: Book = new Book();
  edit: boolean;
  authors: Author[] = new Array();

  constructor(
    private serviceAuthor: AuthorService,
    private toastService: ToastService,
    private serviceBook: BookService,
    private router: Router,
    private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getAuthorsforBook();
    this.edit = false;
    if (this.activeRoute.snapshot.paramMap.get('id') !== null) {
      this.activeRoute.paramMap
        .switchMap((params: ParamMap) =>
          this.serviceBook.getBookWithParam(params.get('id')))
        .subscribe(success => {
          this.books = success;
          this.edit = true;
        });
    }
  }

  getAuthorsforBook() {
    this.serviceAuthor.getAuthor().subscribe(
      success => {
        this.authors = success;
        console.log(this.authors);
      },
      error => <any>error);
  }

  save() {
    this.serviceBook.createBook(this.books).subscribe(
      success => {
        this.books = success;
        this.router.navigate(['listBook']);
      },
      error => <any>error
    );
  }

  saveEdit() {
    this.serviceBook.saveEditBook(this.books).subscribe(
      success => {
        this.books = success;
        this.router.navigate(['listBook']);
      },
      error => <any>error
    );
  }

  backListBook() {
    this.router.navigate(['listBook']);
  }

}
