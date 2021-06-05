import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SortableModule} from 'ngx-bootstrap/sortable';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {AppPrintModule} from '../../../shared/print/print.module';
import {StudentDashboardComponent} from './student-dashboard.component';

describe('StudentDashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        HttpClientTestingModule,
        SortableModule,
        FormErrorsModule,
        AppPrintModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule
      ],
      declarations: [StudentDashboardComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
