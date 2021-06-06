import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../store/reducers';
import { TopicOnlineAssessmentListComponent } from './topic-online-assessment-list.component';

describe('TopicOnlineAssessmentListComponent', () => {
  let component: TopicOnlineAssessmentListComponent;
  let fixture: ComponentFixture<TopicOnlineAssessmentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [TopicOnlineAssessmentListComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicOnlineAssessmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
