import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAcademicYearSectionComponent } from './close-academic-year-section.component';

describe('CloseAcademicYearSectionComponent', () => {
  let component: CloseAcademicYearSectionComponent;
  let fixture: ComponentFixture<CloseAcademicYearSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseAcademicYearSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAcademicYearSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
