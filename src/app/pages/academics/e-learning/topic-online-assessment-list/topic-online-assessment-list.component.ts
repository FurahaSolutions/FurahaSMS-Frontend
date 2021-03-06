import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap/modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { AppState } from '../../../../store/reducers';
import { OnlineAssessmentService } from '../services/online-assessment.service';
import { loadCourses } from '../../store/actions/courses.actions';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';
import { modalMixin } from '../../../../shared/mixins/modal.mixin';
import { formMixin } from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-topic-online-assessment-list',
  templateUrl: './topic-online-assessment-list.component.html',
  styleUrls: ['./topic-online-assessment-list.component.css']
})
export class TopicOnlineAssessmentListComponent extends subscribedContainerMixin(formMixin(modalMixin())) {
  @Input() assessments: any[] = [];
  @Input() edit = false;
  @Input() courseId: number | undefined;
  @Input() topicId: number | undefined;
  @ViewChild('deleteConfirmationDialogue') deleteConfirmationDialogue: ElementRef | undefined;
  faTrash = faTrash;
  faEdit = faEdit;
  faSpinner = faSpinner;
  faGraduationCap = faGraduationCap;
  store: Store<AppState>;
  editedItem: { id: number; name: string; ['exam_paper_name']: string } | undefined;
  contentId: string | undefined;


  constructor(
    modalService: BsModalService,
    private router: Router,
    store: Store<AppState>, private onlineAssessmentService: OnlineAssessmentService) {
    super(modalService, store);
    this.store = store;
  }

  deleteItem(id: number) {
    this.editedItem = this.assessments.find(({id: assessmentId}: any) => assessmentId);
    this.openModal({id, component: this.deleteConfirmationDialogue});
    this.modalRef?.setClass('modal-md bg-dark text-light modal-container');
  }

  editItem(examId: number) {
    const confirmNavigation = confirm('You are being redirected to Exams, continue?');
    return confirmNavigation && this.router.navigate(['/academics', 'exam-bank', 'admin', 'exams', examId, 'edit']).then();
  }

  deleteAssessmentItem() {
    this.submitInProgressSubject$.next(true);
    this.onlineAssessmentService.deleteAssessmentWithId({
      assessmentId: this.editedItem?.id,
      topicId: this.topicId
    }).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.store.dispatch(loadCourses({data: {id: this.courseId as number}}));
        this.submitInProgressSubject$.next(false);
        this.closeModal();
      },
      error: () => this.submitInProgressSubject$.next(false)
    });
  }
}
