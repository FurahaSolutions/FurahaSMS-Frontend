import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LibraryBookService } from '../../services/library-book.service';

@Component({
  selector: 'app-view-library-book',
  templateUrl: './view-library-book.component.html',
  styleUrls: ['./view-library-book.component.css']
})
export class ViewLibraryBookComponent {

  libraryBook$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.libraryBookService.getBookWithId(id))
  );

  constructor(
    private libraryBookService: LibraryBookService,
    private route: ActivatedRoute
  ) {
  }

}
