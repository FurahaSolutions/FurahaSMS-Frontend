import { createSelector } from '@ngrx/store';

import { staffTypeFeatureKey } from '../reducers/staff-type.reducer';
import { selectAdmissionsState } from './admissions.selectors';

export const selectStaffTypesState = createSelector(
  selectAdmissionsState,
  admissions => admissions ? admissions[staffTypeFeatureKey]: {}
);


export const selectStaffTypes = createSelector(
  selectStaffTypesState,
  admissions => Object.values(admissions).filter(item => item.id !== 0)
);

export const selectStaffType = (id: number) => createSelector(
  selectStaffTypesState,
  staffType => staffType ? staffType[id] : null
);
