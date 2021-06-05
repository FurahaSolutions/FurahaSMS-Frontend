import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { academicsFeatureKey, reducers } from '../../../store/reducers';
import { AppStarLabelRequiredModule } from '../../../../../components/label-star-required/app-star-label-required';
import { ELearningCreateCourseComponent } from './e-learning-create-course.component';

describe('ELearningCreateCourseComponent', () => {
  let component: ELearningCreateCourseComponent;
  let fixture: ComponentFixture<ELearningCreateCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        EditorModule,
        AppLoadingBubbleModule,
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        RouterTestingModule.withRoutes([]),
        AppStarLabelRequiredModule,
        SortableModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [ELearningCreateCourseComponent],
      providers: [
        {provide: TINYMCE_SCRIPT_SRC, useValue: '/tinymce/tinymce.min.js'},
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
