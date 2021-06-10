import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { formMixin } from '../../../../shared/mixins/form.mixin';
import { modalMixin } from '../../../../shared/mixins/modal.mixin';
import { AcademicYearService } from '../../services/academic-year.service';

@Component({
  selector: 'app-delete-academic-year',
  templateUrl: './undelete-academic-year.component.html',
  styleUrls: ['./undelete-academic-year.component.css']
})
export class UndeleteAcademicYearComponent extends formMixin(modalMixin()) {
  @Input() id = 0;
  faTrash = faTrash;
  faSpinner = faSpinner;
  confirmation = '';

  constructor(store: Store, modalService: BsModalService,
              private academicYearService: AcademicYearService) {
    super(modalService, store);
    this.store = store;
  }

  saveDelete() {
    this.submitInProgressSubject$.next(true);
    this.academicYearService.restore({id: this.id})
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

}
