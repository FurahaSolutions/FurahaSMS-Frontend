import { TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentTypeService } from './payment-type.service';

describe('PaymentTypeService', () => {
  let service: PaymentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [reducerProvider]
    });
    service = TestBed.inject(PaymentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
