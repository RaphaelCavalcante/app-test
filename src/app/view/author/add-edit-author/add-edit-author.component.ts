import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthorService } from '../../../service/author/author.service';
import { Author } from '../../../model/author';

@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.css']
})
export class AddEditAuthorComponent implements OnInit {

  authors: Author = new Author();
  edit: boolean;

  constructor(private serviceAuthor: AuthorService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.edit = false;
    if (this.activeRoute.snapshot.paramMap.get('id') !== null) {
      this.activeRoute.paramMap
        .switchMap((params: ParamMap) =>
          this.serviceAuthor.getAuthorWithParam(params.get('id')))
        .subscribe(success => {
          this.authors = success;
          this.edit = true;
        });
    }
  }

  save() {
    this.serviceAuthor.updateAuthor(this.authors).subscribe(
      success => {
        this.authors = success;
        this.router.navigate(['listAuthor']);
      },
      error => <any>error);
  }

  saveEdit() {
    this.serviceAuthor.saveEditAuthor(this.authors).subscribe(
      success => {
        this.authors = success;
        this.router.navigate(['listAuthor']);
      },
      error => <any>error);
  }

  backListAuthor() {
    this.router.navigate(['listAuthor']);
  }

}

