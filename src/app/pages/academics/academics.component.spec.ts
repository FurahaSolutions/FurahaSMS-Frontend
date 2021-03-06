import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { myProfileFeatureKey, reducer } from '../my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../store/reducers/app.reducer';
import { AcademicsComponent } from './academics.component';


describe('AcademicsComponent', () => {
  let component: AcademicsComponent;
  let fixture: ComponentFixture<AcademicsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
        RouterTestingModule.withRoutes([]),
        AppLinksModule],
      declarations: [AcademicsComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
