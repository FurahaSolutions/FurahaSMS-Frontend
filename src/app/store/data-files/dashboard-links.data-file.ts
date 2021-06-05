import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';
import { faBookReader } from '@fortawesome/free-solid-svg-icons/faBookReader';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons/faFileInvoiceDollar';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons/faVolleyballBall';
import { faSitemap } from '@fortawesome/free-solid-svg-icons/faSitemap';
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock';
import { faSchool } from '@fortawesome/free-solid-svg-icons/faSchool';
import { faUserShield } from '@fortawesome/free-solid-svg-icons/faUserShield';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

export const dashboardLinks = [
  {
    name: 'Admissions', icon: faUserPlus, link: 'admissions',
    permissions: ['view admissions', 'access teacher admission', 'view student admissions']
  },
  {
    name: 'Students', icon: faChild, link: 'students',
    permissions: ['access student academic reports', 'upload curriculum content', 'update curriculum content',
      'access academics', 'edit subject curriculum', 'create subject curriculum',
      'access curriculum management', 'view academic year', 'create academic year', 'access academic year',
      'access academic year management', 'update curriculum system', 'create curriculum system',
      'create e-learning course']
  },
  {
    name: 'Teachers', icon: faChalkboardTeacher, link: 'teachers',
    permissions: ['assign unit to teacher', 'access teacher admission', 'create teacher',
      'read teacher', 'update teacher', 'delete teacher', 'verify teacher']
  },
  {
    name: 'Library', icon: faBookReader, link: 'library',
    permissions: ['update library book tag', 'create library book tag', 'create library book', 'update library book',
      'issue Library book', 'mark library book returned', 'access library admin', 'access library account',
      'access library']
  },
  {
    name: 'Accounts', icon: faFileInvoiceDollar, link: 'accounts', permissions: ['access accounting'],
  },
  {
    name: 'Procurements', icon: faShoppingCart, link: 'procurements',
    permissions: ['make procurement request', 'approve procurement request', 'create procurement vendor',
      'create procurement tender', 'create procurement bid'
    ]
  },
  {
    name: 'Sports', icon: faVolleyballBall, link: 'sports'
  },
  {
    name: 'Management', icon: faSitemap, link: 'school-management'
  },
  {
    name: 'Time Table', icon: faUserClock, link: 'time-table'
  },
  {
    name: 'Academics', icon: faSchool, link: 'academics',
    permissions: ['access student academic reports', 'upload curriculum content', 'update curriculum content',
      'access academics', 'view subject curriculum', 'edit subject curriculum', 'create subject curriculum',
      'access curriculum management', 'view academic year', 'create academic year', 'access academic year',
      'access academic year management', 'update curriculum system', 'create curriculum system',
      'create e-learning course']
  },
  {
    name: 'Roles & Permissions', icon: faUserShield, link: 'roles-and-permissions',
    permissions: ['assign role', 'change role permissions']
  },
  {
    name: 'Reports', icon: faFileAlt, link: 'reports',
    permissions: ['view student scores reports', 'access student academic reports', 'access student list report',
      'access reports'
    ]
  },
];
