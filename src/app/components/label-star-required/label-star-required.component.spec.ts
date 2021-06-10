import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TabErrorStateModule } from '../tab-error-state/app-tab-error.module';
import { LabelStarRequiredComponent } from './label-star-required.component';

describe('LabelStarRequiredComponent', () => {
  let component: LabelStarRequiredComponent;
  let fixture: ComponentFixture<LabelStarRequiredComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        FontAwesomeTestingModule,
        TabErrorStateModule
      ],
      declarations: [LabelStarRequiredComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelStarRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
