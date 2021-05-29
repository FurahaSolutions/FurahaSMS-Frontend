import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookIssueComponent } from './book-issue.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppInputModule } from '../../../../components/input/app-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectLibraryUserModule } from '../select-library-user/select-library-user.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { SelectLibraryBookRefModule } from '../select-library-book-ref/select-library-book-ref.module';

describe('BookIssueComponent', () => {
  let component: BookIssueComponent;
  let fixture: ComponentFixture<BookIssueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppInputModule,
        ReactiveFormsModule,
        SelectLibraryUserModule,
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        SelectLibraryBookRefModule
      ],
      declarations: [BookIssueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
