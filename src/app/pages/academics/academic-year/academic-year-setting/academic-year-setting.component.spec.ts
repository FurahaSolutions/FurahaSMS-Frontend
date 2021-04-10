import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearSettingComponent } from './academic-year-setting.component';

describe('AcademicYearSettingComponent', () => {
  let component: AcademicYearSettingComponent;
  let fixture: ComponentFixture<AcademicYearSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicYearSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
