import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppValidateSubmitButtonsModule} from '../../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {UserSearchModule} from '../../../../../components/user-search/user-search.module';
import {AddLibraryUserComponent} from './add-library-user.component';

describe('AddLibraryUserComponent', () => {
  let component: AddLibraryUserComponent;
  let fixture: ComponentFixture<AddLibraryUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        ReactiveFormsModule,
        UserSearchModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveComponentModule
      ],
      declarations: [AddLibraryUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibraryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
