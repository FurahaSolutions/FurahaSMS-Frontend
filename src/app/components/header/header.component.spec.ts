import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { appFeatureKey, reducers } from '../../store/reducers/app.reducer';
import { myProfileFeatureKey, reducer } from '../../pages/my-profile/store/reducers/my-profile.reducer';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { HeaderCollapseComponent } from './header-collapse/header-collapse.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        CollapseModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        HeaderComponent,
        MenuSearchComponent,
        UserButtonComponent,
        UserButtonComponent,
        BreadcrumbComponent,
        HeaderCollapseComponent,
        LogoutButtonComponent
      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
