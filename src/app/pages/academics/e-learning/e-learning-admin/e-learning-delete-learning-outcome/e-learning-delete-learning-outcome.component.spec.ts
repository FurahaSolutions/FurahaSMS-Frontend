import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../../store/reducers';
import { ELearningDeleteLearningOutcomeComponent } from './e-learning-delete-learning-outcome.component';

describe('ELearningDeleteLearningOutcomeComponent', () => {
  let component: ELearningDeleteLearningOutcomeComponent;
  let fixture: ComponentFixture<ELearningDeleteLearningOutcomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [ELearningDeleteLearningOutcomeComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningDeleteLearningOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
