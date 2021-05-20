import { Component } from '@angular/core';
import { formMixin } from "../../../../shared/mixins/form.mixin";
import { FormBuilder } from "@angular/forms";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { LibraryBookService } from "../../services/library-book.service";

@Component({
  selector: 'app-library-my-account',
  templateUrl: './library-my-account.component.html',
  styleUrls: ['./library-my-account.component.css']
})
export class LibraryMyAccountComponent extends formMixin() {
  itemForm = this.fb.group({
    heldOnly: [true]
  });
  heldOnly$ = new BehaviorSubject(true);
  allBooks$ = this.libraryBookService.filter({['my-account']: true});
  books$ = combineLatest([this.heldOnly$, this.allBooks$]).pipe(
    map(([heldOnly, books]) =>
      books.filter(book => book && heldOnly)
    )
  );

  constructor(private fb: FormBuilder, private libraryBookService: LibraryBookService) {
    super();
  }


}
