import {
  ActionReducerMap,
} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as fromCourses from './courses.reducer';

export const academicsFeatureKey = 'academics';

export interface AcademicsState {
  courses: fromCourses.State;
}

export interface State extends fromRoot.AppState {
  courses: fromCourses.State;
}

export const reducers: ActionReducerMap<AcademicsState> = {
  courses: fromCourses.reducer
};
