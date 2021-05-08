import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakeOnlineTestComponent } from './take-online-test.component';

describe('TakeOnlineTestComponent', () => {
  let component: TakeOnlineTestComponent;
  let fixture: ComponentFixture<TakeOnlineTestComponent>;

  beforeEach(waitForAsync( () => {
     TestBed.configureTestingModule({
      declarations: [ TakeOnlineTestComponent ]
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
