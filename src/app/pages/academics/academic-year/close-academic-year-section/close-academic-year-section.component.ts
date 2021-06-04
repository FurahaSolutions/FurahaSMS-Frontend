import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {modalMixin} from '../../../../shared/mixins/modal.mixin';
import {AcademicYearService} from '../../services/academic-year.service';

@Component({
  selector: 'app-close-academic-year-section',
  templateUrl: './close-academic-year-section.component.html',
  styleUrls: ['./close-academic-year-section.component.css']
})
export class CloseAcademicYearSectionComponent extends formMixin(modalMixin()) {
  @Input() id = 0;
  @Input() isOpen = true;
  @Input() slug = '';
  @Input() name = '';
  confirmation = '';

  constructor(store: Store, modalService: BsModalService,
              private academicYearService: AcademicYearService) {
    super(modalService, store);
    this.store = store;
  }

  saveStatus() {
    this.submitInProgressSubject$.next(true);
    this.academicYearService.saveClosedStatus({id: this.id, openClose: this.isOpen ? 'close' : 'open', slug: this.slug})
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

}
