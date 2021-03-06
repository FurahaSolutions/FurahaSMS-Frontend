import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabErrorStateModule } from 'src/app/components/tab-error-state/app-tab-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { reducer } from '../store/reducers/academic-year-plan.reducer';
import { EditAcademicYearFinancialPlanComponent } from './edit-academic-year-financial-plan.component';

describe('EditAcademicYearFinancialPlanComponent', () => {
  let component: EditAcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<EditAcademicYearFinancialPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TabErrorStateModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('academicYearPlan', reducer),
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [EditAcademicYearFinancialPlanComponent],
      providers: [reducerProvider,
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
    fixture = TestBed.createComponent(EditAcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
