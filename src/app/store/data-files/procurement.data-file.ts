import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons/faShoppingBasket';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { faGavel } from '@fortawesome/free-solid-svg-icons/faGavel';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons/faCommentsDollar';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';

export const procurementLinks = [
  {
    name: 'My Requests', icon: faUserAlt, link: 'procurements/my-requests', permissions: ['make procurement request']
  },
  {
    name: 'Request items',
    icon: faShoppingBasket,
    link: 'procurements/request',
    permissions: ['make procurement request']
  },
  {
    name: 'Pending Approval',
    icon: faCheckSquare,
    link: 'procurements/requests/approve',
    permissions: ['approve procurement request']
  },
  {
    name: 'Vendors', icon: faTruck, link: 'procurements/vendors', permissions: ['create procurement vendor']
  },
  {
    name: 'Tender', icon: faGavel, link: 'procurements/tender', permissions: ['create procurement tender']
  },
  {
    name: 'Bids', icon: faCommentsDollar, link: 'procurements/tenders/bids', permissions: ['create procurement bid']
  },
  {
    name: 'Awarded Tenders',
    icon: faAward,
    link: 'procurements/tenders/awarded',
    permissions: ['approve procurement tender']
  }
];
