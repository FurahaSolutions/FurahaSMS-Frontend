import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { PrintComponent } from './print.component';

describe('PrintComponent', () => {
  let component: PrintComponent;
  let fixture: ComponentFixture<PrintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeTestingModule
      ],
      declarations: [PrintComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
