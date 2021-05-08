import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddLibraryUserComponent } from './add-library-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppValidateSubmitButtonsModule } from '../../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchComponent } from '../../../../../components/user-search/user-search.component';
import { UserSearchModule } from '../../../../../components/user-search/user-search.module';

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
        FormsModule
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
