import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {LibraryAdminModule} from '../library-admin.module';
import {reducers} from '../../store/reducers';
import {LibraryAdminTagsComponent} from './library-admin-tags.component';

describe('LibraryAdminTagsComponent', () => {
  let component: LibraryAdminTagsComponent;
  let fixture: ComponentFixture<LibraryAdminTagsComponent>;

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
        LibraryAdminModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
