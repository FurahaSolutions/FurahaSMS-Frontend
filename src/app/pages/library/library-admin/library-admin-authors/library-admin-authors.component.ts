import { Component } from '@angular/core';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';

@Component({
  selector: 'app-library-admin-authors',
  templateUrl: './library-admin-authors.component.html',
  styleUrls: ['./library-admin-authors.component.css']
})
export class LibraryAdminAuthorsComponent {
  categories: LibraryAuthorService = this.authorService;

  constructor(private authorService: LibraryAuthorService) {
  }

}
