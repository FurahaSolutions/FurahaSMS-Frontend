import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectLibraryBookRefComponent } from './select-library-book-ref.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

describe('SelectLibraryBookRefComponent', () => {
  let component: SelectLibraryBookRefComponent;
  let fixture: ComponentFixture<SelectLibraryBookRefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveComponentModule,
        TypeaheadModule.forRoot()
      ],
      declarations: [SelectLibraryBookRefComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibraryBookRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
