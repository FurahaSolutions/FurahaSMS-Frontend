import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { reducer } from '../../store/reducers/exam-paper.reducer';
import { QuestionViewComponent } from '../question-view/question-view.component';
import { AdminExamPaperViewComponent } from './admin-exam-paper-view.component';

describe('AdminExamPaperViewComponent', () => {
  let component: AdminExamPaperViewComponent;
  let fixture: ComponentFixture<AdminExamPaperViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('examPaper', reducer),
        Number2AlphabetModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [AdminExamPaperViewComponent, QuestionViewComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})}
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamPaperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
