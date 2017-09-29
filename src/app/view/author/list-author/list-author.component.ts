import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorService } from '../../../service/author/author.service';
import { Author } from '../../../model/author';
import { PagenateComponent } from '../../../component/pagenate/pagenate.component';
import { PageService } from '../../../service/pagenate/page.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent extends PagenateComponent implements OnInit {

  authors: Author[] = new Array();
  hasdata: boolean;

  constructor(
    pagerService: PageService,
    private serviceAuthor: AuthorService,
    private router: Router) {
    super(pagerService);
  }

  ngOnInit() {
    this.hasdata = false;
    this.getAuthorsLibrary();
  }

  getAuthorsLibrary() {
    this.serviceAuthor.getAuthor().subscribe(
      success => {
        this.authors = success;
        this.allItems = this.authors;
        this.setPage(1);
        console.log(this.authors);
        this.hasdata = true;
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
