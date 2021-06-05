import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {AcademicYearFinancialPlanComponent} from './academic-year-financial-plan.component';

describe('AcademicYearFinancialPlanComponent', () => {
  let component: AcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<AcademicYearFinancialPlanComponent>;

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
        HttpClientTestingModule
      ],
      declarations: [AcademicYearFinancialPlanComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue:
            {
              paramMap: of({get: () => 1})
            }

        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
