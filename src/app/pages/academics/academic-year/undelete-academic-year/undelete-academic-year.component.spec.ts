import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../store/reducers';
import { UndeleteAcademicYearComponent } from './undelete-academic-year.component';

describe('UndeleteAcademicYearComponent', () => {
  let component: UndeleteAcademicYearComponent;
  let fixture: ComponentFixture<UndeleteAcademicYearComponent>;

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
        ModalModule.forRoot(),
        HttpClientTestingModule,
        ReactiveComponentModule,
        FormsModule,
        FontAwesomeTestingModule
      ],
      declarations: [UndeleteAcademicYearComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndeleteAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
