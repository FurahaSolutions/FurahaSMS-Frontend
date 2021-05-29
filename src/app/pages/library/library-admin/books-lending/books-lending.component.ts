import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from '../../../../interfaces/link.interface';
import { LinkService } from '../../../../services/link.service';

@Component({
  selector: 'app-books-lending',
  templateUrl: './books-lending.component.html',
  styleUrls: ['./books-lending.component.css']
})
export class BooksLendingComponent {
  links$: Observable<LinkInterface[]> = this.linkService.libraryLendingLinks;

  constructor(private linkService: LinkService) {
  }

}
