import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {reducers} from '../../../store/reducers/app.reducer';
import {ViewStudentAcademicsComponent} from './view-student-academics.component';

describe('ViewStudentAcademicsComponent', () => {
  let component: ViewStudentAcademicsComponent;
  let fixture: ComponentFixture<ViewStudentAcademicsComponent>;
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
        StoreModule.forFeature('app', reducers),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [ViewStudentAcademicsComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})}
          }
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentAcademicsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
