import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {take} from 'rxjs/operators';
import {CountDownTimerComponent} from './count-down-timer.component';



describe('CountDownTimerComponent', () => {
  let component: CountDownTimerComponent;
  let fixture: ComponentFixture<CountDownTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountDownTimerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as input "minutes"', waitForAsync(() => {
    component.minutes = 2/60;
    component.timer$.pipe(take(1)).subscribe({
      next: (x) => {
        expect(x).toBeTruthy();
      }
    });
  }));

  it('should set exam ended when time is up', waitForAsync(() => {
    component.minutes = 1 / 60;
    component.timer$.pipe(take(1)).subscribe({
      next: (x) => {
        expect(x).toBeTruthy();
      }
    });
  }));
});
