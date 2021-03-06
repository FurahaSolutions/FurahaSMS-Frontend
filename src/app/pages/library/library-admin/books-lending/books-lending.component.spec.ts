import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../store/reducers';
import { AppLinksModule } from '../../../../shared/links/links.module';
import { myProfileFeatureKey, reducer } from '../../../my-profile/store/reducers/my-profile.reducer';
import { appFeatureKey, reducers } from '../../../../store/reducers/app.reducer';
import { BooksLendingComponent } from './books-lending.component';

describe('BooksLendingComponent', () => {
  let component: BooksLendingComponent;
  let fixture: ComponentFixture<BooksLendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        AppLinksModule,
        FontAwesomeTestingModule
      ],
      declarations: [BooksLendingComponent],
      providers: [
        reducerProvider
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
