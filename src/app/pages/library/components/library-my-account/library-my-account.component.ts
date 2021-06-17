import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { formMixin } from '../../../../shared/mixins/form.mixin';
import { LibraryBookService } from '../../services/library-book.service';
import { AppState } from '../../../../store/reducers';
import { selectIsLibraryUser } from '../../../my-profile/store/selectors/my-profile.selectors';

@Component({
  selector: 'app-library-my-account',
  templateUrl: './library-my-account.component.html',
  styleUrls: ['./library-my-account.component.css']
})
export class LibraryMyAccountComponent extends formMixin() {
  faInfoCircle = faInfoCircle;
  isLibraryUser$ = this.store.select(selectIsLibraryUser);
  itemForm = this.fb.group({
    heldOnly: [true]
  });
  heldOnly$ = new BehaviorSubject(true);
  allBooks$ = this.libraryBookService.filter({['my-account']: true}).pipe(
    catchError(() => of([]))
  );
  books$ = combineLatest([this.heldOnly$, this.allBooks$]).pipe(
    map(([heldOnly, books]) =>
      books.filter(book => book && heldOnly)
    )
  );
  v$ = combineLatest([this.isLibraryUser$, this.books$]).pipe(
    map(([isLibraryUser, books]) => ({isLibraryUser, books}))
  );


  constructor(private store: Store<AppState>, private fb: FormBuilder, private libraryBookService: LibraryBookService) {
    super();
  }


}
