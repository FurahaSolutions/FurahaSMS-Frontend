import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {StoreModule} from '@ngrx/store';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppStarLabelRequiredModule} from '../../../../components/label-star-required/app-star-label-required';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {TimeTableAcademicYearEditComponent} from './time-table-academic-year-edit.component';

describe('TimeTableAcademicYearEditComponent', () => {
  let component: TimeTableAcademicYearEditComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearEditComponent>;

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
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule
      ],
      declarations: [TimeTableAcademicYearEditComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})},
            paramMap: of({get: () => 1}),
            snapshot: {}
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
