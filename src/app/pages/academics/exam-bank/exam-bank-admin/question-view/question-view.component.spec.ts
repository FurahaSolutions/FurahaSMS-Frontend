import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { QuestionViewComponent } from './question-view.component';
import {FontAwesomeTestingModule} from "@fortawesome/angular-fontawesome/testing";

// eslint-disable-next-line @typescript-eslint/naming-convention
describe('QuestionViewComponent', () => {
  let component: QuestionViewComponent;
  let fixture: ComponentFixture<QuestionViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Number2AlphabetModule, FontAwesomeTestingModule],
      declarations: [QuestionViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewComponent);
    component = fixture.componentInstance;
    component.question = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
