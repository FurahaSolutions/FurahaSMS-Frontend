import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { StudentService } from 'src/app/services/student.service';
import * as StudentProfileActions from '../actions/student-profile.actions';


@Injectable()
export class StudentProfileEffects {

  loadStudentProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(StudentProfileActions.loadStudentProfiles),
    concatMap((payload) => this.studentService.getStudentById(payload.data.id).pipe(
      map(data => StudentProfileActions.loadStudentProfilesSuccess({data})),
      catchError(error =>
        of(StudentProfileActions.loadStudentProfilesFailure({id: payload.data.id, error})))))
  ));

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {
  }

}
