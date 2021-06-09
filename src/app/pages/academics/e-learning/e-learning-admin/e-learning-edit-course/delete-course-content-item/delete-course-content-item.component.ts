import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { ELearningService } from '../../../services/e-learning.service';
import { loadCourses } from '../../../../store/actions/courses.actions';
import { formMixin } from '../../../../../../shared/mixins/form.mixin';
import { modalMixin } from '../../../../../../shared/mixins/modal.mixin';

@Component({
  selector: 'app-delete-course-content-item',
  templateUrl: './delete-course-content-item.component.html',
  styleUrls: ['./delete-course-content-item.component.css']
})
export class DeleteCourseContentItemComponent extends formMixin(modalMixin()) {
  @Input() id: number | undefined;
  @Input() topicId: number | undefined;
  @Input() courseId: number | undefined;
  @Input() learningContent: any;
  faTrash = faTrash;
  faSpinner = faSpinner;
  store: Store;
  contentId = '';

  constructor(store: Store, modalService: BsModalService, private eLearningService: ELearningService) {
    super(modalService, store);
    this.store = store;
  }

  deleteCourseContentItem() {
    this.submitInProgressSubject$.next(true);
    this.eLearningService.deleteCourseContent({
      contentId: this.learningContent.id,
      topicId: this.topicId as number,
      studyMaterialId: this.learningContent.study_material_id
    })
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          this.store.dispatch(loadCourses({data: {id: this.courseId as number}}));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
}

