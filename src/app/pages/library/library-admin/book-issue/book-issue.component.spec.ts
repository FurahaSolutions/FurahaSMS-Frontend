import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookIssueComponent } from './book-issue.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AppInputModule } from "../../../../components/input/app-input.module";
import { ReactiveFormsModule } from "@angular/forms";

describe('BookIssueComponent', () => {
  let component: BookIssueComponent;
  let fixture: ComponentFixture<BookIssueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppInputModule,
        ReactiveFormsModule
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
