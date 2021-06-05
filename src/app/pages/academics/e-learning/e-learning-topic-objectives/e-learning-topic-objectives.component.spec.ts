import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {ELearningTopicObjectivesComponent} from './e-learning-topic-objectives.component';

describe('ELearningTopicObjectivesComponent', () => {
  let component: ELearningTopicObjectivesComponent;
  let fixture: ComponentFixture<ELearningTopicObjectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [ELearningTopicObjectivesComponent],
      providers: [
        reducerProvider,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningTopicObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
