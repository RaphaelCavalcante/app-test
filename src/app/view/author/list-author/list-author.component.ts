import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorService } from '../../../service/author/author.service';
import { Author } from '../../../model/author';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  authors: Author[] = new Array();

  constructor(private serviceAuthor: AuthorService,
  private router: Router) { }

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

  deleteAuthor(authorId: number) {
    this.serviceAuthor.deleteAuthor(authorId.toString()).subscribe(
      success => {
        this.getAuthorsLibrary();
      },
      error => <any>error
    );
  }

  editAuthor(authors: Author) {
    this.router.navigate(['listAuthor/author', authors.id.toString()]);
  }

  newAuthor(): void {
    this.router.navigate(['listAuthor/author']);
  }

}
