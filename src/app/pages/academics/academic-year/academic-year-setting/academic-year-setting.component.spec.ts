import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AcademicYearSettingComponent} from './academic-year-setting.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';

describe('AcademicYearSettingComponent', () => {
  let component: AcademicYearSettingComponent;
  let fixture: ComponentFixture<AcademicYearSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule
      ],
      declarations: [
        AcademicYearSettingComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
