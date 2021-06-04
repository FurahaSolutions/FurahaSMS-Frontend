import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakeOnlineTestComponent } from './take-online-test.component';
import { CountDownTimerModule } from '../../../count-down-timer/count-down-timer.module';

describe('TakeOnlineTestComponent', () => {
  let component: TakeOnlineTestComponent;
  let fixture: ComponentFixture<TakeOnlineTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CountDownTimerModule
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
