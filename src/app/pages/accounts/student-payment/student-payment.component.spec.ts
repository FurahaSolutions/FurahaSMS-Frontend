import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {StoreModule} from '@ngrx/store';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AppRecentlyCreatedStudent} from '../../admissions/student-admissions/students-recently-created/students-recently-created.module';
import {StudentPaymentComponent} from './student-payment.component';

describe('StudentPaymentComponent', () => {
  let component: StudentPaymentComponent;
  let fixture: ComponentFixture<StudentPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppRecentlyCreatedStudent,
        RouterTestingModule.withRoutes([]),
        TabsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [StudentPaymentComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
