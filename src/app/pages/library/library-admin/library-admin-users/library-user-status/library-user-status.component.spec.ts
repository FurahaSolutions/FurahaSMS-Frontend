import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {LibraryUserStatusComponent} from './library-user-status.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from '../../../../../modules/app-loading-bubble';

describe('LibraryUserStatusComponent', () => {
  let component: LibraryUserStatusComponent;
  let fixture: ComponentFixture<LibraryUserStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveComponentModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [LibraryUserStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryUserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
