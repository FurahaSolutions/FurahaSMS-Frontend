import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {StudyMaterialsAdminComponent} from './study-materials-admin.component';

describe('StudyMaterialsAdminComponent', () => {
  let component: StudyMaterialsAdminComponent;
  let fixture: ComponentFixture<StudyMaterialsAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [StudyMaterialsAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
