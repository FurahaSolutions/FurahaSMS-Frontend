import { Component } from '@angular/core';
import { formMixin } from '../../../../../shared/mixins/form.mixin';
import { FormBuilder } from '@angular/forms';
import { LibraryUserService } from '../services/library-user.service';

@Component({
  selector: 'app-add-library-user',
  templateUrl: './add-library-user.component.html',
  styleUrls: ['./add-library-user.component.css']
})
export class AddLibraryUserComponent extends formMixin() {
  itemForm = this.fb.group({
    userId: [undefined]
  });

  constructor(private fb: FormBuilder, private libraryUserService: LibraryUserService) {
    super();
  }

  saveAsLibraryUser() {
    this.submitInProgressSubject$.next(true);
    this.libraryUserService.save(this.itemForm.value)
      .subscribe({
        next: () => this.submitInProgressSubject$.next(false),
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
}
