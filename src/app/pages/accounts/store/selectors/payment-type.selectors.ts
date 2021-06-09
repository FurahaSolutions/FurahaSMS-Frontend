import { createSelector } from '@ngrx/store';
import { paymentTypeFeatureKey } from '../reducers/payment-type.reducer';
import { selectAccountState } from './account.selectors';

export const selectPaymentMethods = createSelector(
  selectAccountState,
  account => account ? Object.values(account[paymentTypeFeatureKey]): []
);
