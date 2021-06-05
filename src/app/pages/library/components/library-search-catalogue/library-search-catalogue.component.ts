import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { FormBuilder, FormControl } from '@angular/forms';
import { LibraryAuthorService } from '../../services/library-author.service';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { LibraryBookService } from '../../services/library-book.service';
import { LibraryPublisherService } from '../../services/library-publisher.service';
import { switchMap, tap } from 'rxjs/operators';
import { loadLibraryBooksSuccess } from '../../store/actions/library-book.actions';
import { formMixin } from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-library-search-catalogue',
  templateUrl: './library-search-catalogue.component.html',
  styleUrls: ['./library-search-catalogue.component.css'],
})
export class LibrarySearchCatalogueComponent extends formMixin() {
  searchParamsForm = this.fb.group({
    title: [''],
    author: [''],
    publisher: [''],
  });

  authors$ = new Observable((observer: Observer<string>) => {
    observer.next(this.author.value);
  }).pipe(
    switchMap(search => search ? this.authorsService.filter(search) : of([])),
  );

  publishers$ = new Observable((observer: Observer<string>) => {
    observer.next(this.publisher.value);
  }).pipe(
    switchMap(search => search ? this.publisherService.filter(search) : of([])),
  );
  titles$ = new Observable((observer: Observer<string>) => {
    observer.next(this.title.value);
  }).pipe(
    switchMap(search => search ? this.booksService.filter({title: search}) : of([])),
  );

  bookSearchedSubject$ = new BehaviorSubject(false);

  books$ = this.bookSearchedSubject$.pipe(
    tap(searched => {
      if (searched) {
        this.submitInProgressSubject$.next(true);
      }
    }),
    switchMap(x => x ? this.booksService.filter(this.searchParamsForm.value) : []),
    tap((books) => {
      this.store.dispatch(loadLibraryBooksSuccess({data: books}));
      this.submitInProgressSubject$.next(false);
    })
  );

  constructor(
    private fb: FormBuilder, private store: Store<fromStore.AppState>,
    private authorsService: LibraryAuthorService,
    private booksService: LibraryBookService,
    private publisherService: LibraryPublisherService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }


  clearForm() {
    this.searchParamsForm.setValue({
      title: '',
      author: '',
      publisher: '',
    });
  }

  get author(): FormControl {
    return this.searchParamsForm.get('author') as FormControl;
  }

  get publisher(): FormControl {
    return this.searchParamsForm.get('publisher') as FormControl;
  }

  get title(): FormControl {
    return this.searchParamsForm.get('title') as FormControl;
  }


  submitSearchParamsForm() {

    this.bookSearchedSubject$.next(true);
    this.cdr.detectChanges();
  }
}
