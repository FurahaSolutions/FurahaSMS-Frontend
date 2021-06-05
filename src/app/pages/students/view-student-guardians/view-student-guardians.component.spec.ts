import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { guardianProfileFeatureKey, reducer } from '../../guardians/store/reducers/guardian-profile.reducer';
import { UserSelectItemComponent } from '../../../components/user-profile/user-select-item/user-select-item.component';
import { NameItemComponent } from '../../../components/user-profile/name-item/name-item.component';
import { ViewStudentGuardiansComponent } from './view-student-guardians.component';

describe('ViewStudentGuardiansComponent', () => {
  let component: ViewStudentGuardiansComponent;
  let fixture: ComponentFixture<ViewStudentGuardiansComponent>;
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
        StoreModule.forFeature(guardianProfileFeatureKey, reducer),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ViewStudentGuardiansComponent, LoadingBubbleComponent, UserSelectItemComponent, NameItemComponent],
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
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentGuardiansComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
