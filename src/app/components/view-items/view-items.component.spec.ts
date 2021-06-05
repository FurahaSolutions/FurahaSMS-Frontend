import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewItemsComponent } from './view-items.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../chips/chips.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { of } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { ReactiveComponentModule } from '@ngrx/component';

describe('ViewItemsComponent', () => {
  let component: ViewItemsComponent;
  let fixture: ComponentFixture<ViewItemsComponent>;
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
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule
      ],
      declarations: [ViewItemsComponent, ChipsComponent, LoadingBubbleComponent, ErrorComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsComponent);
    component = fixture.componentInstance;
    component.itemService = {all$: of([{id: 1}])};
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
