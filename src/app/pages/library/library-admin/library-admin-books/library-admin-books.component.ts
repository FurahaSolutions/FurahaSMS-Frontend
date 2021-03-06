import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-library-admin-books',
  templateUrl: './library-admin-books.component.html',
  styleUrls: ['./library-admin-books.component.css']
})
export class LibraryAdminBooksComponent {
  faChevronRight = faChevronRight;
  links$: Observable<LinkInterface[]> = this.linkService.libraryAdminBooksLinks;


  constructor(private linkService: LinkService) {
  }

}
