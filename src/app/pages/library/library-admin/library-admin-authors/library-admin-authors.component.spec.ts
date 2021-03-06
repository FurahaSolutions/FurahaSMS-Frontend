import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LibraryAdminAuthorsComponent } from './library-admin-authors.component';

describe('LibraryAdminAuthorsComponent', () => {
  let component: LibraryAdminAuthorsComponent;
  let fixture: ComponentFixture<LibraryAdminAuthorsComponent>;
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
        AppViewItemsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [LibraryAdminAuthorsComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminAuthorsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
