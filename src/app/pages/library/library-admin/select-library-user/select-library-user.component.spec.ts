import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {ReactiveComponentModule} from '@ngrx/component';
import {SelectLibraryUserComponent} from './select-library-user.component';

describe('SelectLibraryUserComponent', () => {
  let component: SelectLibraryUserComponent;
  let fixture: ComponentFixture<SelectLibraryUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        TypeaheadModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [SelectLibraryUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibraryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
