import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { NetworkErrorComponent } from './network-error.component';

describe('NetworkErrorComponent', () => {
  let component: NetworkErrorComponent;
  let fixture: ComponentFixture<NetworkErrorComponent>;
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
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [NetworkErrorComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkErrorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
