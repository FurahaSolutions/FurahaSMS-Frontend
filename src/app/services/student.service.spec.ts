import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from '../store/reducers';
import { StudentService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    ],
    providers: [
      reducerProvider
    ]
  }));

  it('should be created', () => {
    const service: StudentService = TestBed.inject(StudentService);
    expect(service).toBeTruthy();
  });
});
