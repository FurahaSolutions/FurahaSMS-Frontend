import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabErrorStateModule } from 'src/app/components/tab-error-state/app-tab-error.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorModule } from 'src/app/components/error/error.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { AcademicsModule } from '../../academics.module';
import { EditUnitComponent } from './edit-unit.component';

describe('EditUnitComponent', () => {
  let component: EditUnitComponent;
  let fixture: ComponentFixture<EditUnitComponent>;
  let store: Store<AppState>;

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
        EffectsModule.forRoot([]),
        AcademicsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TabErrorStateModule,
        AppInputModule,
        TabsModule.forRoot(),
        NgSelectModule,
        ErrorModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [EditUnitComponent, SidebarComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnitComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
