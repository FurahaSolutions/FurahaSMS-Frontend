import { createSelector } from '@ngrx/store';
import { studentFeeStatementFeatureKey } from '../reducers/student-fee-statement.reducer';
import { selectAccountState } from './account.selectors';

export const selectStudentsFeeStatements = createSelector(
  selectAccountState,
  accounts => accounts || []
);
export const selectStudentFeeStatement = (id: number) => createSelector(
  selectStudentsFeeStatements,
  accounts => accounts ? accounts[studentFeeStatementFeatureKey][id] : {}
);
