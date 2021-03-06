import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { ClassLevelUnitLevelAllocationComponent } from './class-level-unit-level-allocation.component';

describe('ClassLevelUnitLevelAllocationComponent', () => {
  let component: ClassLevelUnitLevelAllocationComponent;
  let fixture: ComponentFixture<ClassLevelUnitLevelAllocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [ClassLevelUnitLevelAllocationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelUnitLevelAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
