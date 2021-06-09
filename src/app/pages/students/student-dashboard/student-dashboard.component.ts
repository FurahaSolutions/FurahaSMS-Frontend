import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { formMixin } from '../../../shared/mixins/form.mixin';
import { ClassStreamService } from '../../academics/services/class-stream.service';
import { ClassLevelService } from '../../../services/class-level.service';
import { AcademicYearService } from '../../academics/services/academic-year.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDashboardComponent extends formMixin() {
  faPlusCircle = faPlusCircle;
  faSpinner = faSpinner;
  faCheck = faCheck;
  faEye = faEye;
  faInfoCircle = faInfoCircle;
  studentFilterForm: FormGroup = this.fb.group({
    classLevels: [[]],
    streams: [[]],
    academicYear: ['']
  });
  streams$: Observable<any[]> = this.streamService.all$;
  classLevels$: Observable<any[]> = this.classLevelService.active$;
  academicYears$: Observable<any[]> = this.academicYearService.all$;
  studentsSubject$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  students$ = this.studentsSubject$.asObservable();

  constructor(
    private fb: FormBuilder,
    private streamService: ClassStreamService,
    private classLevelService: ClassLevelService,
    private academicYearService: AcademicYearService,
    private studentService: StudentService
  ) {
    super();
  }

  submitStudentFilterForm() {
    this.submitInProgressSubject$.next(true);
    console.log(this.studentFilterForm.value);
    this.studentService.getStudents(this.studentFilterForm.value).pipe(
      catchError(() => of([])),
      tap(res => this.studentsSubject$.next(res)),
      tap(() => this.submitInProgressSubject$.next(false))
    ).subscribe();
  }

}
