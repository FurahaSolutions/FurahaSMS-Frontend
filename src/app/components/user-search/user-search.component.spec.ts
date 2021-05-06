import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { UserSearchComponent } from './student-search.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppInputModule } from '../input/app-input.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('StudentSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        TypeaheadModule.forRoot(),
        AppInputModule,
        ReactiveComponentModule
      ],
      declarations: [UserSearchComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
