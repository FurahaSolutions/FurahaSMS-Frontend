import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StreamComponent} from './stream.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppViewItemsModule} from 'src/app/modules/app-view-items.module';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';

describe('StreamComponent', () => {
  let component: StreamComponent;
  let fixture: ComponentFixture<StreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        AppViewItemsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [StreamComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
