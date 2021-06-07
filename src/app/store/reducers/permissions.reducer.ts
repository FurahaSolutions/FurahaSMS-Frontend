import { createReducer } from '@ngrx/store';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faUserShield } from '@fortawesome/free-solid-svg-icons/faUserShield';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons/faFileInvoiceDollar';
import { faSchool } from '@fortawesome/free-solid-svg-icons/faSchool';
import { faArchive } from '@fortawesome/free-solid-svg-icons/faArchive';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons/faFolderPlus';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons/faPlaneDeparture';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons/faUserEdit';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons/faBookMedical';
import { academicCurriculumLinks } from '../data-files/academic-curriculum.data-file';
import { procurementLinks } from '../data-files/procurement.data-file';
import { examBankLinks } from '../data-files/exam-bank.data-file';
import { accountsLinks } from '../data-files/accounts-links.data-file';
import { dashboardLinks } from '../data-files/dashboard-links.data-file';


export const permissionsFeatureKey = 'permissions';

export interface State {
  [id: string]: LinkInterface[];
}


export const initialState: State = {
  dashboard: dashboardLinks,

  accounts: accountsLinks,

  examBank: examBankLinks,

  libraryAdminUsers: [
    {
      name: 'Library Users', icon: faUserEdit, link: 'library/admin/users/view', permissions: [],
    },
    {
      name: 'Add Library User',
      icon: faUserPlus,
      link: 'library/admin/users/add',
      permissions: ['create library user']
    },
  ],

  libraryAdminBooks: [
    {
      name: 'Create Library Book', icon: faBookMedical, link: 'library/admin/books/create',
      permissions: ['update library book', 'create library book']
    },
  ],

  procurement: procurementLinks,

  libraryAdmin: [
    {
      name: 'Users Management', icon: faUserPlus, link: 'library/admin/users',
      permissions: ['create library user', 'block library user', 'unblock library user']
    },
    {
      name: 'Books Management', icon: faBook, link: 'library/admin/books',
      permissions: ['create library book', 'update library book']
    },
    {
      name: 'Authors Management', icon: faPencilAlt, link: 'library/admin/authors',
      permissions: ['create library book author', 'update library book author']
    },
    {
      name: 'Publishers Management', icon: faBookOpen, link: 'library/admin/publishers',
      permissions: ['create library book publisher', 'update library book publisher']
    },
    {
      name: 'Tags Management', icon: faTag, link: 'library/admin/tags',
      permissions: ['create library book tag', 'update library book tag']
    },
    {
      name: 'Books Lending', icon: faTag, link: 'library/admin/books-lending',
      permissions: ['issue book', 'mark issued book as returned']
    }
  ],

  libraryLending: [
    {
      name: 'Lending History', icon: faHistory, link: '/library/admin/books-lending/history',
      permissions: ['access library']
    }, {
      name: 'Book Issue', icon: faBook, link: '/library/admin/books-lending/issue-book',
      permissions: ['access library']
    }, {
      name: 'Book Return', icon: faBook, link: '/library/admin/books-lending/return-book',
      permissions: ['access library']
    },
  ],

  academicCurriculum: academicCurriculumLinks,

  library: [
    {
      name: 'Search Catalogue', icon: faSearch, link: 'library/search-catalogue',
      permissions: ['access library']
    }, {
      name: 'My Account', icon: faUserCircle, link: 'library/my-account',
      permissions: ['access library']
    }, {
      name: 'Admin', icon: faUserSecret, link: 'library/admin', permissions: ['access library admin']
    }
  ],

  admissions: [
    {
      name: 'Student Admissions', icon: faChild, link: 'admissions/students',
      permissions: ['create student', 'update student']
    },
    {
      name: 'Teaching Staff Admissions', icon: faChalkboardTeacher, link: 'admissions/staff/teachers',
      permissions: ['create teacher', 'update teacher']
    },
    {
      name: 'Support Staff Admissions', icon: faUserPlus, link: 'admissions/staff/support',
      permissions: ['create support staff']
    }
  ],

  studentAdmissions: [
    {
      name: 'New Student', icon: faUserPlus, link: 'admissions/students/create', permissions: ['create student']
    },
    {
      name: 'Edit Student Details',
      icon: faUserEdit,
      link: 'admissions/students/edit',
      permissions: ['update student']
    }
  ],

  teachingStaffAdmissions: [
    {
      name: 'New Teaching Staff', icon: faUserPlus, link: 'admissions/staff/teachers/create',
      permissions: ['create teacher']
    },
    {
      name: 'Edit Teacher Details', icon: faInfoCircle, link: 'admissions/staff/teachers/edit',
      permissions: ['update teacher']
    }
  ],

  academics: [
    {
      name: 'Academic Year', icon: faCalendarAlt, link: 'academics/academic-year'
    },
    {
      name: 'Curriculum', icon: faBook, link: 'academics/curriculum'
    },
    {
      name: 'Exam Bank', icon: faBalanceScale, link: 'academics/exam-bank'
    },
    {
      name: 'Study Materials', icon: faBookOpen, link: 'academics/study-materials'
    },
    {
      name: 'E-Learning', icon: faPlaneDeparture, link: 'academics/e-learning'
    },
  ],

  academicYears: [
    {
      name: 'Create New', icon: faFolderPlus, link: 'academics/academic-year/create'
    },
    {
      name: 'View Archives', icon: faArchive, link: 'academics/academic-year/archives'
    },
    {
      name: 'Subject/ Unit Allocations', icon: faSlidersH, link: 'academics/academic-year/subject-allocations'
    }
  ],

  academicYear: [
    {
      name: 'Financial Plan', icon: faFileInvoiceDollar, link: 'academics/academic-year/:id/financial-plan'
    },
    {
      name: 'Subjects/ Units', icon: faSchool, link: `academics/academic-year/:id/units`
    },
  ],

  timeTable: [
    {name: 'My Schedules', icon: faUserClock, link: 'time-table/my-schedules'},
    {name: 'Admin', icon: faUserSecret, link: 'time-table/admin'},
  ],
  rolesAndPermissions: [
    {
      name: 'User Roles/ Permissions', icon: faUserShield, link: 'roles-and-permissions/user',
      permissions: ['assign role']
    },
    {
      name: 'Roles & Permissions', icon: faSlidersH, link: 'roles-and-permissions/roles',
      permissions: ['change role permissions']
    },
  ]
};


export const reducer = createReducer(
  initialState,
);

