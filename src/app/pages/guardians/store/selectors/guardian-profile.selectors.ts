import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGuardianProfile from '../reducers/guardian-profile.reducer';

export const selectGuardianProfileState = createFeatureSelector<fromGuardianProfile.State>(
  fromGuardianProfile.guardianProfileFeatureKey
);

export const selectGuardianProfileWithId = (id: number) => createSelector(
  selectGuardianProfileState,
  state => state[id]
);
