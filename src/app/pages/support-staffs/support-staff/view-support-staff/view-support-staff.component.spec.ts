import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';
import {reducer, supportStaffFeatureKey} from '../../store/reducers/support-staff.reducer';
import {CreateUnitComponent} from '../../../academics/curriculum/create-unit/create-unit.component';
import {ViewSupportStaffComponent} from './view-support-staff.component';

describe('ViewSupportStaffComponent', () => {
  let component: ViewSupportStaffComponent;
  let fixture: ComponentFixture<ViewSupportStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(supportStaffFeatureKey, reducer),
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveComponentModule
      ],
      declarations: [ViewSupportStaffComponent, CreateUnitComponent],
      providers: [reducerProvider],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
