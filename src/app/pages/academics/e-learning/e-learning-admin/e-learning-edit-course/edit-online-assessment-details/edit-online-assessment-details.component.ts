import { Component } from '@angular/core';
import { OnlineAssessmentService } from '../../../services/online-assessment.service';
import { subscribedContainerMixin } from '../../../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../../../shared/mixins/form.mixin';
import { FormBuilder, Validators } from '@angular/forms';
import { map, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-online-assessment-details',
  templateUrl: './edit-online-assessment-details.component.html',
  styleUrls: ['./edit-online-assessment-details.component.css']
})
export class EditOnlineAssessmentDetailsComponent extends subscribedContainerMixin(formMixin()) {
  assessmentId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  itemForm = this.fb.group({
    name: ['', Validators.required],
    availableDateTime: ['', [Validators.required]],
    closedDateTime: ['', [Validators.required]],
    period: ['', [Validators.required]],
  });
  assessment$ = this.assessmentId$.pipe(
    switchMap(id => this.assessmentService.getAssessmentWithId(id)),
    tap(val => {
      this.topicId = val.e_learning_topic_id;
      this.itemForm.patchValue({
        name: val.exam_paper_name,
        availableDateTime: new Date(val.available_at).toISOString().slice(0, 16),
        closedDateTime: new Date(val.closing_at).toISOString().slice(0, 16),
        period: val.period,
      });
      console.log(val);
    })
  );
  private topicId: number | undefined;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private assessmentService: OnlineAssessmentService) {
    super();
  }

  submitFormItem() {
    this.assessmentId$.pipe(
      mergeMap(id => this.assessmentService.save({
        topicId: this.topicId,
        data: {...this.itemForm.value, id },
        assessmentId: id})),
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.submitInProgressSubject$.next(false);
      },
      error: () => this.submitInProgressSubject$.next(false)
    });
  }
}
