import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ViewComponent } from 'src/app/components/view/view.component';
import { ChipsComponent } from 'src/app/components/chips/chips.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { RouterTestingModule } from '@angular/router/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import { ViewClassLevelComponent } from './view-class-level.component';

describe('ViewClassLevelComponent', () => {
  let component: ViewClassLevelComponent;
  let fixture: ComponentFixture<ViewClassLevelComponent>;
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
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule
      ],
      declarations: [
        ViewClassLevelComponent,
        ViewComponent,
        ChipsComponent,
        DescriptionComponent,
      ],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
