import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {ELearningAdminComponent} from './e-learning-admin.component';

describe('ELearningAdminComponent', () => {
  let component: ELearningAdminComponent;
  let fixture: ComponentFixture<ELearningAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule
      ],
      declarations: [ELearningAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
