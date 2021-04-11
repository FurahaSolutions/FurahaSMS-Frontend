import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAcademicYearComponent } from './close-academic-year-section.component';

describe('CloseAcademicYearSectionComponent', () => {
  let component: ArchiveAcademicYearComponent;
  let fixture: ComponentFixture<ArchiveAcademicYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveAcademicYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
