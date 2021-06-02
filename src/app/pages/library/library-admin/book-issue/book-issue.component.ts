import { Component} from '@angular/core';
import { formMixin } from '../../../../shared/mixins/form.mixin';
import { LibraryBookService } from '../../services/library-book.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent extends formMixin() {
  itemForm = this.fb.group({
    userId: [null, Validators.required],
    bookItemId: [null, Validators.required],
  });

  constructor(private libraryBookService: LibraryBookService, private fb: FormBuilder) {
    super();
  }


  saveIssuedBook() {
    if(this.itemForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.libraryBookService.issueBook(this.itemForm.value).subscribe({
          next: () => this.submitInProgressSubject$.next(false),
          error: () => this.submitInProgressSubject$.next(false),
        }
      );
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }
}
