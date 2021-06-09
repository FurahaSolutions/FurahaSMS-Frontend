import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';

export const examBankLinks = [
  {
    name: 'Past Exams', icon: faFolderOpen, link: 'academics/exam-bank/archives',
    permissions: ['access academics']
  },
  {
    name: 'Admin', icon: faUserSecret, link: 'academics/exam-bank/admin',
    permissions: ['access exam plan', 'create exam plan']
  },
];
