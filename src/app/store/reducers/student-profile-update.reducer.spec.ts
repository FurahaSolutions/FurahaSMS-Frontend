import { reducer, initialState } from './student-profile-update.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

describe('StudentProfileUpdate Reducer', () => {
  describe('an unknown action', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule
        ]
      });
    }));
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
