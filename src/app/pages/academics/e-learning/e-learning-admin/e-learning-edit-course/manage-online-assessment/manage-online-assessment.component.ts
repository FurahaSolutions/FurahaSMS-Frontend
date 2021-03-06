import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest} from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { formMixin } from '../../../../../../shared/mixins/form.mixin';
import { subscribedContainerMixin } from '../../../../../../shared/mixins/subscribed-container.mixin';
import { OnlineAssessmentService } from '../../../services/online-assessment.service';
import { modalMixin } from '../../../../../../shared/mixins/modal.mixin';
import { loadCourses } from '../../../../store/actions/courses.actions';
import { AppState } from '../../../../../../store/reducers';

@Component({
  selector: 'app-manage-online-assessment',
  templateUrl: './manage-online-assessment.component.html',
  styleUrls: ['./manage-online-assessment.component.css']
})
export class ManageOnlineAssessmentComponent extends subscribedContainerMixin(formMixin(modalMixin())) {
  @Input() topicId: number | undefined;
  @Input() courseId: number | undefined;
  @Input() assessmentId: number | undefined;
  @Output() valid = new EventEmitter();
  @Output() submitChange = new EventEmitter();

  store: Store<AppState>;
  // _submitted = new Subject();
  itemForm = this.fb.group({
    name: ['', Validators.required],
    availableDateTime: ['', [Validators.required]],
    closedDateTime: ['', [Validators.required]],
    period: ['', [Validators.required]],
  });

  formChanged$ = this.itemForm.valueChanges.pipe(
    tap(() => this.valid.emit(this.itemForm))
  );

  v$ = combineLatest([this.formChanged$]);
  // @Input() submitted: Observable<any>;
  //
  // set(val: Observable<any>) {
  //   this._submitted.next();
  //   return val;
  // }

  constructor(
    modalService: BsModalService,
    store: Store<AppState>,
    private fb: FormBuilder,
    private onlineAssessmentService: OnlineAssessmentService) {
    super(modalService, store);
    this.store = store;
  }

  submission = () => this.onlineAssessmentService.save({
    topicId: this.topicId,
    data: this.itemForm.value,
    assessmentId: this.assessmentId
  });


  submitFormItem() {
    this.submitChange.emit(true);
    this.submission().pipe(takeUntil(this.destroyed$)).subscribe({
      next: () => {
        this.closeModal();
        this.store.dispatch(loadCourses({data: {id: this.courseId as number}}));
      },
      error: () => this.submitChange.emit(false)
    });
  }
}
