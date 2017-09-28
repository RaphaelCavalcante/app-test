import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  isActive(instruction: String[]): boolean {
    let result = false;
    instruction.forEach(element => {
      if (element.toString() === '/') {
        result = this.router.isActive(element.toString(), true);
      } else if (this.router.isActive(element.toString(), false)) {
        result = true;
      }
    });
    return result;
  }

  toLibrary() {
    this.router.navigate(['listLibrary']);
  }

  toAuthor() {
    this.router.navigate(['listAuthor']);
  }

  toBooks() {
    this.router.navigate(['listBook']);
  }

}
