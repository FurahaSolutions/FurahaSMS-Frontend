import { Component } from '@angular/core';
import { formMixin } from "../../../../shared/mixins/form.mixin";
import { FormBuilder, Validators } from "@angular/forms";
import { LibraryBookService } from "../../services/library-book.service";

@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.css']
})
export class BookReturnComponent extends formMixin() {
  itemForm = this.fb.group({
    bookItemId: ['', Validators.required]
  })

  constructor(private libraryBookService: LibraryBookService, private fb: FormBuilder) {
    super();
  }

  saveReturnedBook() {
    if(this.itemForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.libraryBookService.returnBook(this.itemForm.value).subscribe({
          next: () => this.submitInProgressSubject$.next(false),
          error: () => this.submitInProgressSubject$.next(false),
        }
      );
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }
}
