import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppLoadingBubbleModule} from '../../../modules/app-loading-bubble';
import {ViewTeacherSubjectsComponent} from './view-teacher-subjects.component';

describe('ViewTeacherSubjectsComponent', () => {
  let component: ViewTeacherSubjectsComponent;
  let fixture: ComponentFixture<ViewTeacherSubjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule

      ],
      declarations: [ViewTeacherSubjectsComponent],
      providers: [
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
    fixture = TestBed.createComponent(ViewTeacherSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
