import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountDownTimerModule } from '../../../count-down-timer/count-down-timer.module';
import { TakeOnlineTestComponent } from './take-online-test.component';

describe('TakeOnlineTestComponent', () => {
  let component: TakeOnlineTestComponent;
  let fixture: ComponentFixture<TakeOnlineTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CountDownTimerModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        ReactiveComponentModule
      ],
      declarations: [TakeOnlineTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOnlineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
