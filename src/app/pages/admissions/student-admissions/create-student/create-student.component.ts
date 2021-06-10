import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IdNumberValidator } from 'src/app/validators/student-id-taken.validator';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';
import { takeUntil } from 'rxjs/operators';
import { formMixin } from '../../../../shared/mixins/form.mixin';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent extends subscribedContainerMixin(formMixin())
  implements OnInit, CanComponentDeactivate {
  newStudentForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    schoolIdNumber: ['', {updateOn: 'blur'}],
    middleName: [''],
    otherNames: [''],
    autoGenerateId: [true, Validators.required],
    namePrefix: [''],
    gender: [''],
    religion: [''],
    dateOfBirth: ['', Validators.required],
  });

  genders$ = this.genderService.loadAll$;
  religions$ = this.religionService.loadAll$;

  constructor(
    private fb: FormBuilder,
    private idNumberValidator: IdNumberValidator,
    private studentService: StudentService,
    private router: Router,
    private genderService: GenderService,
    private religionService: ReligionService,
  ) {
    super();
  }

  ngOnInit() {
    this.autoGenerate.valueChanges
      .subscribe(autoGenerate => {
        if(autoGenerate) {
          this.schoolIdNumber.setValidators(null);
        } else {
          this.schoolIdNumber.setValidators([Validators.required]);
          this.schoolIdNumber.setAsyncValidators([this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)]);
        }
        this.schoolIdNumber.updateValueAndValidity();
      });
  }

  get schoolIdNumber(): FormControl {
    return this.newStudentForm.get('schoolIdNumber') as FormControl;
  }

  get autoGenerate(): FormControl {
    return this.newStudentForm.get('autoGenerateId') as FormControl;
  }

  submitNewStudentForm() {
    this.submitInProgressSubject$.next(true);
    if(this.newStudentForm.valid) {
      this.studentService.createNewStudent(this.newStudentForm.value).pipe(
        takeUntil(this.destroyed$)
      ).subscribe({
        next: (res: any) => {
          this.submitted = true;
          this.submitInProgressSubject$.next(false);
          this.router.navigate(['/students', res.data.id]).then();
        }, error: () => {
          this.submitInProgressSubject$.next(false);
          this.submitted = false;
        }
      });
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.newStudentForm.dirty && !this.submitted) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
