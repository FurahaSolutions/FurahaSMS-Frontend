import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamPaperService } from '../../services/exam-paper.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent extends subscribedContainerMixin(formMixin()) {
  newExamForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    unit: ['', Validators.required],
    unitLevel: ['', Validators.required],
    instructions: this.fb.array([
      this.newInstructions
    ])
  });

  constructor(
    private fb: FormBuilder,
    private examPaperService: ExamPaperService,
    private router: Router
  ) {
    super();
  }

  get examInstructions(): FormArray {
    return this.newExamForm.get('instructions') as FormArray;
  }

  addInstruction() {
    this.examInstructions.push(this.newInstructions);
  }

  get newInstructions() {
    return this.fb.group({
      description: ['', [Validators.required]]
    });
  }

  deleteInstruction(i: number) {
    const deletionConfirmed = confirm(`Are You Sure you wish to delete instruction ${i + 1}`);
    if(deletionConfirmed) {
      this.examInstructions.controls.splice(i, 1);
    }
  }

  submitExamPaperForm() {

    if(this.newExamForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.examPaperService.save(this.newExamForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(res => {
          this.submitInProgressSubject$.next(false);
          this.router.navigate(['academics', 'exam-bank', 'admin', 'exams', res.data.id, 'view']).then();
        }, () => this.submitInProgressSubject$.next(false));
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }
}
