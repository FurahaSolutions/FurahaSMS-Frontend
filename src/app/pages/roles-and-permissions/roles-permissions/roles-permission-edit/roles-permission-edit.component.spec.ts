import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { RolesPermissionEditComponent } from './roles-permission-edit.component';

describe('RolesPermissionEditComponent', () => {
  let component: RolesPermissionEditComponent;
  let fixture: ComponentFixture<RolesPermissionEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        ReactiveFormsModule,
        AppCheckboxModule,
        AppInputModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FontAwesomeTestingModule
      ],
      declarations: [RolesPermissionEditComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
