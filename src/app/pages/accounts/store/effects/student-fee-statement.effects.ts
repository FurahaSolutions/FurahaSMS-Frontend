import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {StudentFeePaymentService} from '../../services/student-fee-payment.service';
import * as fromStudentFeeStatementActions from './../actions/student-fee-statement.actions';


@Injectable()
export class StudentFeeStatementEffects {
  loadStudentFeeStatement$ = createEffect(() => this.actions$.pipe(
    ofType(fromStudentFeeStatementActions.loadStudentFeeStatements),
    concatMap((payload) =>
      this.studentFeePaymentService.getFeesStatementForStudentWithId(payload.data.id).pipe(
        map(data => fromStudentFeeStatementActions.loadStudentFeeStatementsSuccess({
          data: {studentId: payload.data.id, statementDetails: data}
        })),
        catchError(error => of(fromStudentFeeStatementActions.loadStudentFeeStatementsFailure({error}))))
    )
  ));

  constructor(
    private actions$: Actions,
    private studentFeePaymentService: StudentFeePaymentService
  ) {
  }

}
