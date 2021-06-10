import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {PaymentTypeService} from '../../services/payment-type.service';
import * as PaymentTypesAction from './../actions/payment-type.actions';


@Injectable()
export class PaymentTypeEffects {
  loadPaymentTypes$ = createEffect(() => this.actions$.pipe(
    ofType(PaymentTypesAction.loadPaymentTypes),
    concatMap(() =>
      this.paymentTypeService.all$.pipe(
        map(data => PaymentTypesAction.loadPaymentTypesSuccess({data})),
        catchError(error => of(PaymentTypesAction.loadPaymentTypesFailure({error}))))
    )
  ));
  constructor(
    private actions$: Actions,
    private paymentTypeService: PaymentTypeService
  ) {
  }
}
