import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorService } from '../../../service/author/author.service';
import { Author } from '../../../model/author';
import { PagenateComponent } from '../../../component/pagenate/pagenate.component';
import { PageService } from '../../../service/pagenate/page.service';
import { ToastService } from '../../../service/toast-notification/toast.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent extends PagenateComponent implements OnInit {

  authors: Author[] = new Array();
  hasdata: boolean;
  authorFilter: any = { lastName: '' };

  constructor(
    pagerService: PageService,
    private toastService: ToastService,
    private serviceAuthor: AuthorService,
    private router: Router) {
    super(pagerService);
    this.hasdata = false;
  }

  ngOnInit() {
    this.getAuthorsLibrary();
  }

  getAuthorsLibrary() {
    this.serviceAuthor.getAuthor().subscribe(
      success => {
        this.authors = success;
        this.allItems = this.authors;
        this.setPage(1);
        this.hasdata = true;
      },
      error => this.hasdata = false
    );
  }

  deleteAuthor(authorId: number) {
    this.serviceAuthor.deleteAuthor(authorId.toString()).subscribe(
      success => {
        this.getAuthorsLibrary();
        this.toastService.toastSuccess();
      },
      error => this.toastService.toastError()
    );
  }

  editAuthor(authors: Author) {
    this.router.navigate(['listAuthor/author', authors.id.toString()]);
  }

  newAuthor(): void {
    this.router.navigate(['listAuthor/author']);
  }

}
