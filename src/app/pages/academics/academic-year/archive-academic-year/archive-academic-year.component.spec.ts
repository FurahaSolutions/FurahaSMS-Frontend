import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ArchiveAcademicYearComponent} from './archive-academic-year.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';

describe('ArchiveAcademicYearComponent', () => {
  let component: ArchiveAcademicYearComponent;
  let fixture: ComponentFixture<ArchiveAcademicYearComponent>;

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
        FormsModule
      ],
      declarations: [ArchiveAcademicYearComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
