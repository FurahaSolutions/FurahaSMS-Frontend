import { modalFeatureKey } from '../reducers/modal.reducer';
import { selectModalState } from './modal.selectors';


describe('Modal Selectors', () => {
  it('should select the feature state', () => {
    const result = selectModalState({
      app: { [modalFeatureKey]: { open: true } }
    });

    expect(result).toEqual({ open: true });
  });
});
