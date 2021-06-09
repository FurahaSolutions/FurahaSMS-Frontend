import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';

export const academicCurriculumLinks = [
  {
    name: 'Unit Categories', icon: faBook, link: 'academics/curriculum/unit-categories',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum'
    ]
  },
  {
    name: 'Units', icon: faBook, link: 'academics/curriculum/units',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum'
    ]
  },
  {
    name: 'Class Level Categories', icon: faBook, link: 'academics/curriculum/class-level-categories',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum'
    ]
  },
  {
    name: 'Class Levels', icon: faBook, link: 'academics/curriculum/class-levels',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum']
  },
  {
    name: 'Class Levels Unit Allocation', icon: faBook, link: 'academics/curriculum/class-level-units',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum']
  },
  {
    name: 'Semester/ Terms', icon: faBook, link: 'academics/curriculum/semesters',
    permissions: ['access curriculum management', 'view subject curriculum', 'edit subject curriculum',
      'create subject curriculum']
  },
  {
    name: 'Class Stream Management', icon: faBook, link: 'academics/curriculum/streams',
    permissions: ['create stream', 'update stream', 'delete stream']
  }
];
