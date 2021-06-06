import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { FormErrorsModule } from '../../../../shared/form-errors/form-errors.module';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view.component';

describe('TimeTableAcademicYearViewComponent', () => {
  let component: TimeTableAcademicYearViewComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormErrorsModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule,
        FontAwesomeTestingModule
      ],
      declarations: [TimeTableAcademicYearViewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})},
            paramMap: of({get: () => 1}),
            snapshot: {}
          }
        },
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
