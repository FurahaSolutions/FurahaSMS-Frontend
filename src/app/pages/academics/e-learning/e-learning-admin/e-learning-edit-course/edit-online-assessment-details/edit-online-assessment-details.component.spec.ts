import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditOnlineAssessmentDetailsComponent } from './edit-online-assessment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from '../../../../../../modules/app-loading-bubble';
import { AppInputModule } from '../../../../../../components/input/app-input.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
        HttpClientTestingModule
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
