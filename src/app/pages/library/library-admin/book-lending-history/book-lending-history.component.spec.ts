import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookLendingHistoryComponent } from './book-lending-history.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveComponentModule } from "@ngrx/component";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from "ngx-bootstrap/pagination";

describe('BookLendingHistoryComponent', () => {
  let component: BookLendingHistoryComponent;
  let fixture: ComponentFixture<BookLendingHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveComponentModule,
        FormsModule,
        PaginationModule.forRoot()
      ],
      declarations: [BookLendingHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
