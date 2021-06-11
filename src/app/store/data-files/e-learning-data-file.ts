import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faListAlt } from '@fortawesome/free-solid-svg-icons/faListAlt';
import { LinkInterface } from '../../interfaces/link.interface';

export const eLearningDashboardLinks: LinkInterface[] = [
  {name: 'View Courses', icon: faListAlt, link: 'academics/e-learning/courses', permissions: ['access e-learning']},
  {name: 'Admin', icon: faUserSecret, link: 'academics/e-learning/admin', permissions: ['access e-learning admin']},
];
