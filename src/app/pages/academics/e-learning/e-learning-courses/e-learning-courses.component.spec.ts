import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ELearningCourseModule } from '../e-learning-course/e-learning-course.module';
import { metaReducers, REDUCER_TOKEN } from '../../../../store/reducers';
import { reducer, studentProfileFeatureKey } from '../../../students/store/reducers/student-profile.reducer';
import { ELearningCoursesComponent } from './e-learning-courses.component';
import { FontAwesomeTestingModule } from "@fortawesome/angular-fontawesome/testing";

describe('ELearningCoursesComponent', () => {
  let component: ELearningCoursesComponent;
  let fixture: ComponentFixture<ELearningCoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ELearningCourseModule,
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveComponentModule,
        CommonModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(studentProfileFeatureKey, reducer),
        FontAwesomeTestingModule
      ],
      declarations: [ELearningCoursesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
