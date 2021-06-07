import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../store/reducers';
import { appFeatureKey, reducers } from '../../../../store/reducers/app.reducer';
import { FormErrorsComponent } from './form-errors.component';

describe('FormErrorsComponent', () => {
  let component: FormErrorsComponent;
  let fixture: ComponentFixture<FormErrorsComponent>;

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
      declarations: [FormErrorsComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
