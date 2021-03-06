
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import {ReactiveComponentModule} from '@ngrx/component';
import { AppComponent } from './app.component';
import { ToastComponent } from './components/toast/toast.component';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from './store/reducers';
import { NetworkLoadingModule } from './shared/network-loading';
import { ErrorModule } from './components/error/error.module';

describe('AppComponent', () => {
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
        RouterTestingModule.withRoutes([]),
        NetworkLoadingModule,
        ErrorModule,
        ReactiveComponentModule
      ],
      declarations: [
        AppComponent, ToastComponent
      ],
      providers: [reducerProvider]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
