import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectLibraryBookRefModule } from '../select-library-book-ref/select-library-book-ref.module';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { BookReturnComponent } from './book-return.component';

describe('BookReturnComponent', () => {
  let component: BookReturnComponent;
  let fixture: ComponentFixture<BookReturnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        SelectLibraryBookRefModule,
        AppValidateSubmitButtonsModule
      ],
      declarations: [BookReturnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
