import {Component} from '@angular/core';
import {LibraryBookTagService} from '../../services/library-book-tag.service';

@Component({
  selector: 'app-library-admin-tags',
  templateUrl: './library-admin-tags.component.html',
  styleUrls: ['./library-admin-tags.component.css']
})
export class LibraryAdminTagsComponent {
  categories = this.libraryBookTagService;

  constructor(private libraryBookTagService: LibraryBookTagService) {
  }

}
