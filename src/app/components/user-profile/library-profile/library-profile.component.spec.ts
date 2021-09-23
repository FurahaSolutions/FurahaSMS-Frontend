import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../store/reducers';
import { AppLoadingBubbleModule } from '../../../modules/app-loading-bubble';
import { appFeatureKey, reducers } from '../../../store/reducers/app.reducer';
import { LibraryProfileComponent } from './library-profile.component';

describe('LibraryProfileComponent', () => {
  let component: LibraryProfileComponent;
  let fixture: ComponentFixture<LibraryProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        FontAwesomeTestingModule,
        HttpClientTestingModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      declarations: [LibraryProfileComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
