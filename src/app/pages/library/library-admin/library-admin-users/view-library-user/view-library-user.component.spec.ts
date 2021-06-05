import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {UserSearchModule} from '../../../../../components/user-search/user-search.module';
import {ViewLibraryUserComponent} from './view-library-user.component';

describe('ViewLibraryUserComponent', () => {
  let component: ViewLibraryUserComponent;
  let fixture: ComponentFixture<ViewLibraryUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        UserSearchModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ViewLibraryUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibraryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
