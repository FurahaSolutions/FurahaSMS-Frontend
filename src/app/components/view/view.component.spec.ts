import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { DescriptionComponent } from '../description/description.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { ChipsComponent } from '../chips/chips.component';
import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
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
      declarations: [ViewComponent, DescriptionComponent, LoadingBubbleComponent, ChipsComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    component.service = {getItemById: () => of({id: 1})};
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
