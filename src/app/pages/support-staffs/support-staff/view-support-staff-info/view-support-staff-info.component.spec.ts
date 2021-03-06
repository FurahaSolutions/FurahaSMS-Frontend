import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {reducers} from '../../store/reducers';
import {ViewSupportStaffInfoComponent} from './view-support-staff-info.component';

describe('ViewSupportStaffInfoComponent', () => {
  let component: ViewSupportStaffInfoComponent;
  let fixture: ComponentFixture<ViewSupportStaffInfoComponent>;

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
        StoreModule.forFeature('supportStaff', reducers),
        AppLoadingBubbleModule
      ],
      declarations: [ViewSupportStaffInfoComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        },
        {
          provide: Store,
          useValue: of(() => of(1))
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportStaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
