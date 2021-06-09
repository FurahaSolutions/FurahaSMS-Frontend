import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { reducers } from '../../../../store/reducers/app.reducer';
import { TimeTableAcademicYearDashboardComponent } from './time-table-academic-year-dashboard.component';

describe('TimeTableAcademicYearDashboardComponent', () => {
  let component: TimeTableAcademicYearDashboardComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('app', reducers),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [TimeTableAcademicYearDashboardComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
