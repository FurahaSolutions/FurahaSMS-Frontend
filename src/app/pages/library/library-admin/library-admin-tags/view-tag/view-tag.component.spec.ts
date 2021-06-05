import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StoreModule} from '@ngrx/store';
import {reducers} from 'src/app/pages/library/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {AppLoadingBubbleModule} from '../../../../../modules/app-loading-bubble';
import {ViewTagComponent} from './view-tag.component';

describe('ViewTagComponent', () => {
  let component: ViewTagComponent;
  let fixture: ComponentFixture<ViewTagComponent>;

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
        StoreModule.forFeature('library', reducers),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule
      ],
      declarations: [ViewTagComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({get: () => 1})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
