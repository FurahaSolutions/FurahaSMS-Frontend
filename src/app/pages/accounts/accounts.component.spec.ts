import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {RouterTestingModule} from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {myProfileFeatureKey, reducer} from '../my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../store/reducers/app.reducer';
import {AccountsComponent} from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
        RouterTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [AccountsComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
