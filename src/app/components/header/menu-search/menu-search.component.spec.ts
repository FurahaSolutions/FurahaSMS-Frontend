import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { appFeatureKey, reducers } from '../../../store/reducers/app.reducer';
import { myProfileFeatureKey } from '../../../pages/my-profile/store/reducers/my-profile.reducer';
import { LinkService } from '../../../services/link.service';
import { MenuSearchComponent } from './menu-search.component';

describe('MenuSearchComponent', () => {
  let component: MenuSearchComponent;
  let fixture: ComponentFixture<MenuSearchComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        StoreModule.forFeature(myProfileFeatureKey, reducers),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule
      ],
      declarations: [MenuSearchComponent],
      providers: [
        reducerProvider,
        {
          provide: LinkService,
          useValue: {
            allLinks: of([])
          }
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
