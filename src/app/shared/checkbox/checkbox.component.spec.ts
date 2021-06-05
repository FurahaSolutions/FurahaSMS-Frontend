import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeTestingModule } from "@fortawesome/angular-fontawesome/testing";

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeTestingModule
      ],
      declarations: [CheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
