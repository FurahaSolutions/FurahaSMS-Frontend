import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { formMixin } from '../../../../shared/mixins/form.mixin';
import { modalMixin } from '../../../../shared/mixins/modal.mixin';
import { AcademicYearService } from '../../services/academic-year.service';

@Component({
  selector: 'app-archive-academic-year',
  templateUrl: './archive-academic-year.component.html',
  styleUrls: ['./archive-academic-year.component.css']
})
export class ArchiveAcademicYearComponent extends formMixin(modalMixin()) {
  @Input() id = 0;
  @Input() archive = true;
  faTrash = faTrash;
  faSpinner = faSpinner;
  confirmation = '';

  constructor(store: Store, modalService: BsModalService,
              private academicYearService: AcademicYearService) {
    super(modalService, store);
    this.store = store;
  }

  get title() {
    return (this.archive ? 'Archive' : 'Unarchive') + ' Academic Year';
  }

  saveArchive() {
    this.submitInProgressSubject$.next(true);
    this.academicYearService.saveArchiveStatus({id: this.id, archive: this.archive})
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
}
