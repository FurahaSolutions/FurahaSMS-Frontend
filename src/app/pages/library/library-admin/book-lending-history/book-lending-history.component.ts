import { Component } from '@angular/core';
import { LibraryBookService } from "../../services/library-book.service";
import { map, switchMap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-book-lending-history',
  templateUrl: './book-lending-history.component.html',
  styleUrls: ['./book-lending-history.component.css']
})
export class BookLendingHistoryComponent {
  pageSubject$ = new BehaviorSubject(1);

  booksPaginator$ = this.pageSubject$.pipe(
    switchMap(page => this.libraryService.issuedBooks({limit: 20, page}))
  )
  books$ = this.booksPaginator$.pipe(
    map(({data}: any) => data.map((x: any) =>
      ({...x, overdue: (new Date(x['due_date']) > new Date(x['returned_date']))})))
  );

  maxSize = 10;
  bigTotalItems$ = this.booksPaginator$.pipe(map(({total}: any) => total));
  bigCurrentPage = 1;

  constructor(private libraryService: LibraryBookService) {
  }

}
