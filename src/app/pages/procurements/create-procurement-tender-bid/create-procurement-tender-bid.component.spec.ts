import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {InputComponent} from '../../../components/input/input.component';
import {SelectComponent} from '../../../components/select/select.component';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {CreateProcurementTenderBidComponent} from './create-procurement-tender-bid.component';

describe('CreateProcurementTenderBidComponent', () => {
  let component: CreateProcurementTenderBidComponent;
  let fixture: ComponentFixture<CreateProcurementTenderBidComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppStarLabelRequiredModule,
        FormsModule, ReactiveFormsModule, HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [CreateProcurementTenderBidComponent, InputComponent, SelectComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcurementTenderBidComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
