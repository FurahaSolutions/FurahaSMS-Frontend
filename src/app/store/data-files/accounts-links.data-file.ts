import { faSwatchbook } from '@fortawesome/free-solid-svg-icons/faSwatchbook';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';

export const accountsLinks = [
  {
    name: 'Financial Plan', icon: faSwatchbook, link: 'accounts/financial-plan',
    permissions: ['access financial plan', 'create financial plan']
  },
  {
    name: 'Student Fee Payment', icon: faHandHoldingUsd, link: 'accounts/student-fee-payment',
    permissions: ['receive student fee payment']
  },
  {
    name: 'Admin', icon: faUserSecret, link: 'accounts/admin',
    permissions: ['update fee plan', 'create fee plan', 'access fee plan']
  }
];
