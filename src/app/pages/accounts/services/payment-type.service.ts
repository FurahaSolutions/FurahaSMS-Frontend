import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { tap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { selectPaymentMethods } from '../store/selectors/payment-type.selectors';
import { loadPaymentTypes } from '../store/actions/payment-type.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  loadAll$: Observable<any> = this.store.pipe(
    select(selectPaymentMethods),
    filter(res => Object.keys(res).length < 1),
    tap(() => this.store.dispatch(loadPaymentTypes()))
  );
  all$: Observable<any> = this.http.get('api/accounts/payment-methods?active=true');
  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) { }
}
