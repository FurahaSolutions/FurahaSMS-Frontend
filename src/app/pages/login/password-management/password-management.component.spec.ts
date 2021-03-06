import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MyProfileService } from '../../my-profile/services/my-profile.service';
import { LoadMyProfileModule } from '../../my-profile/load-my-profile.module';
import { UserPasswordResetModule } from '../user-password-reset/user-password-reset.module';
import { UserPasswordChangeModule } from '../user-password-change/user-password-change.module';
import { PasswordManagementComponent } from './password-management.component';

describe('PasswordManagementComponent', () => {
  let component: PasswordManagementComponent;
  let fixture: ComponentFixture<PasswordManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        UserPasswordChangeModule,
        UserPasswordResetModule,
        HttpClientTestingModule,
        LoadMyProfileModule,
        AppLoadingBubbleModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
            parent: {
              snapshot: {},
              parent: {
                snapshot: {},
                paramMap: of({get: () => 1})
              }
            }
          }
        },
        {
          provide: MyProfileService,
          useValue: {
            loadMyProfile$: of({id: 1})
          }
        }
      ],
      declarations: [PasswordManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
