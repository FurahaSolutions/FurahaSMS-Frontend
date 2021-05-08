import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLibraryUserComponent } from './view-library-user.component';
import { UserSearchModule } from '../../../../../components/user-search/user-search.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewLibraryUserComponent', () => {
  let component: ViewLibraryUserComponent;
  let fixture: ComponentFixture<ViewLibraryUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        UserSearchModule,
        HttpClientTestingModule
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
