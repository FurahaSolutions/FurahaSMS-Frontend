import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { ViewProcurementRequestComponent } from './view-procurement-request.component';

describe('ViewProcurementRequestComponent', () => {
  let component: ViewProcurementRequestComponent;
  let fixture: ComponentFixture<ViewProcurementRequestComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule,
        CommonModule
      ],
      declarations: [ViewProcurementRequestComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
