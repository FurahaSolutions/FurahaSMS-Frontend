import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLoadingBubbleModule } from '../../../../../../modules/app-loading-bubble';
import { AppInputModule } from '../../../../../../components/input/app-input.module';
import { EditOnlineAssessmentDetailsComponent } from './edit-online-assessment-details.component';

describe('EditOnlineAssessmentDetailsComponent', () => {
  let component: EditOnlineAssessmentDetailsComponent;
  let fixture: ComponentFixture<EditOnlineAssessmentDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveComponentModule,
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        AppInputModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        FontAwesomeModule
      ],
      declarations: [EditOnlineAssessmentDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOnlineAssessmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
