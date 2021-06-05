import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../store/reducers';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { AcademicYearSettingComponent } from './academic-year-setting.component';

describe('AcademicYearSettingComponent', () => {
  let component: AcademicYearSettingComponent;
  let fixture: ComponentFixture<AcademicYearSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule,
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [
        AcademicYearSettingComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              parent: {
                paramMap: of({
                  get: () => 1
                })
              }
            }
          }
        }
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
