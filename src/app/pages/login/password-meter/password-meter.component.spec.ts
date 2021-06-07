import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../store/reducers';
import { appFeatureKey, reducers } from '../../../store/reducers/app.reducer';
import { PasswordMeterComponent } from './password-meter.component';

describe('PasswordMeterComponent', () => {
  let component: PasswordMeterComponent;
  let fixture: ComponentFixture<PasswordMeterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      declarations: [PasswordMeterComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
