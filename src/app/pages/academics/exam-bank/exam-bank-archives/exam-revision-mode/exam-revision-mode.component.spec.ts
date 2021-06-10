import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { examPaperFeatureKey, initialState, reducer } from '../../store/reducers/exam-paper.reducer';
import { ViewQuestionRevisionModeComponent } from '../view-question-revision-mode/view-question-revision-mode.component';
import { ExamRevisionModeComponent } from './exam-revision-mode.component';

describe('ExamRevisionModeComponent', () => {
  let component: ExamRevisionModeComponent;
  let fixture: ComponentFixture<ExamRevisionModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(examPaperFeatureKey, reducer),
        Number2AlphabetModule,
        AppCheckboxModule,
        ReactiveComponentModule,
        FontAwesomeModule
      ],
      declarations: [
        ExamRevisionModeComponent,
        ViewQuestionRevisionModeComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        },
        {
          provide: Store,
          useValue: of({[examPaperFeatureKey]: initialState})
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRevisionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
