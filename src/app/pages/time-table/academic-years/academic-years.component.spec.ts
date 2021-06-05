import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AccordionModule} from 'ngx-bootstrap/accordion';
import {AcademicYearsComponent} from './academic-years.component';

describe('AcademicYearsComponent', () => {
  let component: AcademicYearsComponent;
  let fixture: ComponentFixture<AcademicYearsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule.forRoot()
      ],
      declarations: [AcademicYearsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
