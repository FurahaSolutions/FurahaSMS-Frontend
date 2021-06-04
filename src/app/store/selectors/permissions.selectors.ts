import { createSelector } from '@ngrx/store';
import { selectAppState } from './app.selectors';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';

export const selectAppPermissionsState = createSelector(
  selectAppState,
  state => state ? state[permissionsFeatureKey] : {}
);

const createLinkSelector = (link: string) => createSelector(
  selectAppPermissionsState,
  state => state[link]
);

export const selectDashboardLinks = createLinkSelector('dashboard');

export const selectAccountsLinks = createLinkSelector('accounts');

export const selectExamBankLinks = createLinkSelector('examBank');

export const selectLibraryAdminBooksLinks = createLinkSelector('libraryAdminBooks');

export const selectAcademicsLinks = createLinkSelector('academics');

export const selectAdmissionsLinks = createLinkSelector('admissions');

export const selectStudentAdmissionsLinks = createLinkSelector('studentAdmissions');

export const selectAcademicYearsLinks = createLinkSelector('academicYears');

export const selectLibraryLinks = createLinkSelector('library');

export const selectAcademicCurriculumLinks = createLinkSelector('academicCurriculum');

export const selectLibraryAdminLinks = createLinkSelector('libraryAdmin');

export const selectLibraryLendingLinks = createLinkSelector('libraryLending');

export const selectProcurementLinks = createLinkSelector('procurement');

export const selectLibraryAdminUsersLinks = createLinkSelector('libraryAdminUsers');

export const selectTeachingStaffAdmissionsLinks = createLinkSelector('teachingStaffAdmissions');

export const selectTimeTableLinks = createLinkSelector('timeTable');

export const rolesAndPermissionsLinks = createLinkSelector('rolesAndPermissions');

export const allLinks = createSelector(
  selectAppPermissionsState,
  state => Object.values(state).reduce((a, b) => ([...a, ...b]), [])
);

