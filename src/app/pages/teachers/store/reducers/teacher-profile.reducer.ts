import {Action, createReducer, on} from '@ngrx/store';
import * as TeacherProfileActions from '../actions/teacher-profile.actions';
import * as StudentProfileActions from '../../../students/store/actions/student-profile.actions';
import { IUserProfile } from '../../../../interfaces/user-profile.interface';

export const teacherProfileFeatureKey = 'teacherProfile';

export interface State {
  [key: number]: {
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    email?: string;
    phone?: string;
    id?: number;
  };
}

export const initialState: State = {

  0: {
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: ''
  }
};


const teacherProfileReducer = createReducer(
  initialState,

  on(TeacherProfileActions.loadTeacherProfiles, (state, _action) => ({
    ...state
  })),
  on(TeacherProfileActions.loadTeacherProfilesSuccess, (state, action) => ({
    ...state,
    [action.data.id]: {
      ...state[action.data.id],
      ...action.data
    }
  })),
  on(TeacherProfileActions.loadTeacherProfilesFailure, (state, action) => ({
    ...state,
    [action.id]: {...state[action.id], ...(action as IUserProfile), error: action.error}
  })),
);

export const reducer = (state: State | undefined, action: Action) => teacherProfileReducer(state, action);
