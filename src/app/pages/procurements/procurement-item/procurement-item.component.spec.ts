import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ProcurementItemComponent } from './procurement-item.component';

describe('ProcurementItemComponent', () => {
  let component: ProcurementItemComponent;
  let fixture: ComponentFixture<ProcurementItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeTestingModule
      ],
      declarations: [ProcurementItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementItemComponent);
    component = fixture.componentInstance;
    component.item = {id: 1};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
