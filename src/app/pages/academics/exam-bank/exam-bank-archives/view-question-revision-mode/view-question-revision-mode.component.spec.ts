import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { ViewQuestionRevisionModeComponent } from './view-question-revision-mode.component';

// eslint-disable-next-line @typescript-eslint/naming-convention
describe('ViewQuestionRevisionModeComponent', () => {
  let component: ViewQuestionRevisionModeComponent;
  let fixture: ComponentFixture<ViewQuestionRevisionModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        Number2AlphabetModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        AppCheckboxModule,
      ],
      declarations: [ViewQuestionRevisionModeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionRevisionModeComponent);
    component = fixture.componentInstance;
    component.question = {
      answers: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
