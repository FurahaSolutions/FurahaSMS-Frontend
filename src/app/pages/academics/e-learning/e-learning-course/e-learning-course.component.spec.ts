import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {ELearningCourseComponent} from './e-learning-course.component';

describe('ELearningCourseComponent', () => {
  let component: ELearningCourseComponent;
  let fixture: ComponentFixture<ELearningCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [ELearningCourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseComponent);
    component = fixture.componentInstance;
    component.course = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
